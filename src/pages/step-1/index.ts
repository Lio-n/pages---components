/* new TextSyle(text, type); type=["title","large" & ["body" == "default"]] */
import { TextStyle } from "../../component/text-styles/index";

/* new Input(span, placeHolder ); 'Name of Span Tag' */
/* new Button(text, background-color, border);  */
import { Button, Input } from "../../component/input-button/index";

export const initPath1 = (params) => {
  const div = document.createElement("div");

  //Creo los Elementos
  let title = "Necesitamos algunos datos más";
  const textTitle = new TextStyle(title, "title");

  const form = document.createElement("form");
  const inputEmail = new Input("Email", "Ingresá tu email", "");
  const inputComidaFav = new Input(
    "Comida favorita",
    "Ingresá tu comida favorita",
    ""
  );
  const inputSelect = new Input("", "", "select");

  const buttonNext = new Button("Continuar", "#9CBBE9", "none");
  const buttonBack = new Button("Volver", "", "solid 1px");

  let arrayEls = [
    inputEmail,
    inputComidaFav,
    inputSelect,
    buttonNext,
    buttonBack,
  ];
  for (const item of arrayEls) {
    form.appendChild(item);
  }
  div.appendChild(textTitle);
  div.appendChild(form);

  buttonNext.addEventListener("click", () => {
    params.goTo("/thankyou");
  });
  buttonBack.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
};
