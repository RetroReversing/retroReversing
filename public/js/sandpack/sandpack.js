const reactUrl = "https://esm.sh/react@18";
const reactDomUrl = "https://esm.sh/react-dom@18/client";
const sandpackUrl = "https://esm.sh/@codesandbox/sandpack-react@2.7.2";
const themeUrl = "https://esm.sh/@codesandbox/sandpack-themes@2.7.2";

class Sandpack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const [React, ReactDOM, { Sandpack }, { githubLight }] = await Promise.all([
      import(reactUrl),
      import(reactDomUrl),
      import(sandpackUrl),
      import(themeUrl),
    ]);

    const code = this.getAttribute("code") || `document.body.innerHTML = "<h1>Hello Sandpack</h1>";`;
    const template = this.getAttribute("template") || "vanilla";

    const container = document.createElement("div");
    this.shadowRoot.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      React.createElement(Sandpack, {
        template,
        theme: githubLight,
        files: {
          "/index.js": { code },
        },
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

customElements.define("sandpack", Sandpack);
