// Example Usage with full control of multiple files:
// <rr-sandpack template="react-ts" show-tabs>
//   <template>
//   {
//     "/App.tsx": {
//       "file": "/public/js/sandpack/examples/SnesRomHeaderViewer.tsx"
//     }
//     "/code.ts": {
//       "code": "console.log('hello world')"
//     }
//   }
//   </template>
// </rr-sandpack>

//  Simple example usage that only overrides the App.tsx
// <rr-sandpack
//   template="react-ts"
//   app="/public/js/sandpack/examples/SnesRomHeaderViewer.tsx">
// </rr-sandpack>

const deps = "?deps=react@18,react-dom@18";

const reactUrl = `https://esm.sh/react@18${deps}`;
const reactDomUrl = `https://esm.sh/react-dom@18/client${deps}`;
const sandpackUrl = `https://esm.sh/@codesandbox/sandpack-react@2.2.0${deps}`;
const themeUrl = `https://esm.sh/@codesandbox/sandpack-themes@2.0.21${deps}`;

const defaultFiles = {
  "/App.tsx": {
    code: `export default function App() { return <h1>Default Example</h1>; }`
  },
  "/FileUpload.tsx": {
    file: '/public/js/sandpack/common/FileUpload.tsx'
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
    this._placeholder = document.createElement("div");
    this._placeholder.textContent = "Loading interactive example...";
    this.appendChild(this._placeholder);
    this._observer = null;
  }

  connectedCallback() {
    this._observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this._observer.disconnect();
          this._initSandpack();
        }
      },
      { threshold: 0.1 }
    );
    this._observer.observe(this);
  }

  async _initSandpack() {
    const [React, ReactDOM, { Sandpack }, { nightOwl }] = await Promise.all([
      import(reactUrl),
      import(reactDomUrl),
      import(sandpackUrl),
      import(themeUrl),
    ]);

    const templateAttr = this.getAttribute("template") || "react-ts";
    const showTabsAttr = this.hasAttribute("show-tabs");

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

    const appFileUrl = this.getAttribute("app");
    if (appFileUrl) {
      userFiles["/App.tsx"] = { file: appFileUrl };
    }

    // Merge user files over defaults
    const combinedFiles = { ...defaultFiles, ...userFiles };

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

    this.removeChild(this._placeholder);
    this.appendChild(this._container);

    const root = ReactDOM.createRoot(this._container);
    root.render(
      React.createElement(Sandpack, {
        template: templateAttr,
        //theme: nightOwl,
        theme:"auto",
        files,
        options: {
          externalResources: ["https://cdn.tailwindcss.com"],
          initMode: "user-visible",
          showTabs: showTabsAttr,
          showLineNumbers: true,
          showConsoleButton: true,
          wrapContent: true,
          editorHeight: 400, // default was 300
          editorWidthPercentage: 60
        },
      })
    );
  }
}

customElements.define("rr-sandpack", RRSandpack);
