const deps = "?deps=react@18,react-dom@18";

const reactUrl = `https://esm.sh/react@18${deps}`;
const reactDomUrl = `https://esm.sh/react-dom@18/client${deps}`;
const sandpackUrl = `https://esm.sh/@codesandbox/sandpack-react@2.2.0${deps}`;
const themeUrl = `https://esm.sh/@codesandbox/sandpack-themes@2.0.21${deps}`;

const defaultFiles = {
  "/App.js": {
    code: `export default function App() { return <h1>Default Example</h1>; }`
  },
  "/index.js": {
    code: `import App from './App';\nimport { createRoot } from 'react-dom/client';\ncreateRoot(document.getElementById('root')).render(<App />);`
  },
  "/index.html": {
    code: `<div id='root'></div>`
  }
};

class RRSandpack extends HTMLElement {
  constructor() {
    super();
    this._container = document.createElement("div");
    this.appendChild(this._container);
  }

  async connectedCallback() {
    const [React, ReactDOM, { Sandpack }, { nightOwl }] = await Promise.all([
  import(reactUrl),
  import(reactDomUrl),
  import(sandpackUrl),
  import(themeUrl),
]);

    let userFiles = {};
    const tpl = this.querySelector("template");

    if (tpl) {
      try {
        const raw = tpl.innerHTML.trim();
        userFiles = JSON.parse(raw);
      } catch (err) {
        console.error("Invalid JSON inside <template>", err);
      }
    }

    try {
      userFiles = rawContent ? JSON.parse(rawContent) : {};
        [...this.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        this.removeChild(node);
      }
    });
    } catch (err) {
      console.error("Invalid JSON inside <rr-sandpack>", err);
    }

    // Merge user files over defaults
    const combinedFiles = { ...defaultFiles, ...userFiles };

    // Resolve fetches
    const files = {};
    await Promise.all(
      Object.entries(combinedFiles).map(async ([filename, value]) => {
        if (value.code) {
          files[filename] = { code: value.code };
        } else if (value.file) {
          try {
            const res = await fetch(value.file);
            if (!res.ok) throw new Error(`Failed to fetch ${value.file}`);
            const content = await res.text();
            files[filename] = { code: content };
          } catch (err) {
            files[filename] = { code: `// Error loading ${value.file}\n${err.message}` };
          }
        }
      })
    );

    const template = this.getAttribute("template") || "react";


    const root = ReactDOM.createRoot(this._container);
    root.render(
      React.createElement(Sandpack, {
        template,
        theme: nightOwl,
        files,
        options: {
          showTabs: false,
          showLineNumbers: true,
          showConsoleButton: true,
          wrapContent: true,
        },
      })
    );
  }
}

customElements.define("rr-sandpack", RRSandpack);
