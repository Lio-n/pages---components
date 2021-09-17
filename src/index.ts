import { initRouter } from "./router";
import { initHeaderComp } from "./component/header/index";
import { initFooterComp } from "./component/footer/index";

(function main() {
  const root = document.querySelector(".root");

  initHeaderComp();
  initRouter(root);
  initFooterComp();
})();
