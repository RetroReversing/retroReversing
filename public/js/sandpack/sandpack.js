const reactUrl = "https://esm.sh/react@18";
const reactDomUrl = "https://esm.sh/react-dom@18/client";
const sandpackUrl = "https://esm.sh/@codesandbox/sandpack-react@2.7.2";
const themeUrl = "https://esm.sh/@codesandbox/sandpack-themes@2.7.2";

class RRSandpack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [React, ReactDOM, { Sandpack }, { githubLight }] = await Promise.all([
      import(reactUrl),
      import(reactDomUrl),
      import(sandpackUrl),
      import(themeUrl)
    ]);

    const rawContent = this.textContent.trim();
    let parsedFiles;

    try {
      parsedFiles = JSON.parse(rawContent);
    } catch (err) {
      console.error("Invalid JSON inside <rr-sandpack>", err);
      return;
    }

    const files = {};
    await Promise.all(
      Object.entries(parsedFiles).map(async ([filename, value]) => {
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

    const container = document.createElement("div");
    this.shadowRoot.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      React.createElement(Sandpack, {
        template,
        theme: githubLight,
        files,
        options: {
          showTabs: true,
          showLineNumbers: true,
          showConsoleButton: true,
          wrapContent: true,
        },
      })
    );
  }
}

customElements.define("rr-sandpack", RRSandpack);
