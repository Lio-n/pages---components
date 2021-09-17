export class TextStyle extends HTMLElement {
  constructor(text: string, type: string) {
    super();
    this.render(text, type);
  }
  render(text: string, type: string) {
    var shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
    .title{
      font-family: 'Roboto', sans-serif;
      font-size: 60px;
      margin: 0;
      padding: 2rem 1rem;
    }
    .large{
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 1rem;
    }
    .body{
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 1rem 1rem 3rem;
    }   
    `;
    shadow.appendChild(style);

    switch (type) {
      case "title":
        //Element .title
        const h1El = document.createElement("h1");
        h1El.classList.add("title");
        h1El.textContent = text;
        shadow.appendChild(h1El);
        break;
      case "large":
        //Element .large
        const h2El = document.createElement("h2");
        h2El.classList.add("large");
        h2El.textContent = text;
        shadow.appendChild(h2El);
        break;
      //.body
      default:
        //Element .body
        const pEl = document.createElement("p");
        pEl.classList.add("body");
        pEl.textContent = text;
        shadow.appendChild(pEl);
        break;
    }
  }
}
customElements.define("text-styles", TextStyle);
