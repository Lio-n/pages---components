/* new TextSyle(text, type); type=["title","large" & ["body" == "default"]] */
import { TextStyle } from "../../component/text-styles/index";

/* new Input(span, placeHolder ); 'Name of Span Tag' */
/* new Button(text, background-color, border);  */
import { Button, Input } from "../../component/input-button";

export const initWelcome = (params) => {
  const div = document.createElement("div");

  //Creo los Elementos
  let title = "Te damos la bienvenida a esta página";
  const textTitle = new TextStyle(title, "title");

  let body =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";
  const textBody = new TextStyle(body, "");

  let large = "Para continuar ingresá tu nombre";
  const textLarge = new TextStyle(large, "large");

  const inputName = new Input("Nombre", "Ingresá tu nombre", "");

  const button = new Button("Comenzar", "#9CBBE9", "none");

  const form = document.createElement("form");

  //Añado los Elementos
  div.appendChild(textTitle);
  div.appendChild(textBody);
  div.appendChild(textLarge);

  form.appendChild(inputName);
  form.appendChild(button);

  div.appendChild(form);

  button.addEventListener("click", () => {
    params.goTo("/step-1");
  });
  return div;
};
