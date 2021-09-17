/* new TextSyle(text, type); type=["title","large" & ["body" == "default"]] */
import { TextStyle } from "../../component/text-styles/index";

/* new Input(span, placeHolder ); 'Name of Span Tag' */
/* new Button(text, background-color, border);  */
import { Button, Input } from "../../component/input-button";

export const initThankYou = (params) => {
  const div = document.createElement("div");

  //Creo los Elementos
  const textTitle = new TextStyle("Gracias", "title");

  let large = "Toda la información que nos brindaste es muy importante";
  const textLarge = new TextStyle(large, "large");

  const button = new Button("De nada", "#9CBBE9", "none");

  const form = document.createElement("form");

  //Añado los Elementos
  div.appendChild(textTitle);
  div.appendChild(textLarge);
  form.appendChild(button);
  div.appendChild(form);

  button.addEventListener("click", () => {
    params.goTo("/");
  });
  return div;
};
