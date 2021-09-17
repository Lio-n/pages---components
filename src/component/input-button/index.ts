export class Input extends HTMLElement {
  constructor(span: string, placeHolder: string, type: string) {
    super();
    this.render(span, placeHolder, type);
  }
  render(span: string, placeHolder: string, type: string) {
    var shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
        .form__label{
          width: 100%;
        }
        div > label, .form__span{
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          display: block;
          margin-bottom: 5px;
        }
        select, .form__input{
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          width: 100%;
          height: 55px;
          margin-bottom: 2rem;
          border-radius: 5px;
          padding: .5rem;
        }`;
    shadow.appendChild(style);

    if (type == "select") {
      const div = document.createElement("div");
      div.classList.add("form__label");
      div.innerHTML = `
      <label for="select">Alguna de estas tres opciones</label>

      <select id="select">
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
      </select>
      `;

      shadow.appendChild(div);
    } else {
      const label = document.createElement("label");
      label.classList.add("form__label");
      label.innerHTML = `
      <!--Contact-Form__${span}-->
        <span class="form__span">${span}</span>
        <input class="form__input  type="text"  placeholder="${placeHolder}";" />
       `;
      shadow.appendChild(label);
    }
  }
}
customElements.define("custom-input", Input);

export class Button extends HTMLElement {
  constructor(name: string, color: any, border: string) {
    super();
    this.render(name, color, border);
  }
  render(name: string, color: string, border: string) {
    var shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerHTML = `
    .button__link{
      width: 100%;
      cursor: pointer;
      background-color: ${color};
      border: ${border};
      font-weight: 600;
      height: 55px;
      font-size: 22px;
      border-radius: 4px;
      margin-bottom: 2rem;
    }
    `;
    shadow.appendChild(style);
    const button = document.createElement("button");
    button.classList.add("button__link");
    button.setAttribute("href", "/b");
    button.textContent = name;
    shadow.appendChild(button);
  }
}
customElements.define("custom-button", Button);
