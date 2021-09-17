import { initWelcome } from "./pages/welcome";
import { initPath1 } from "./pages/step-1";
import { initThankYou } from "./pages/thank-you";

const routes = [
  {
    path: /\//,
    handler: initWelcome,
  },
  {
    path: /\/welcome/,
    handler: initWelcome,
  },
  {
    path: /\/step-1/,
    handler: initPath1,
  },
  {
    path: /\/thankyou/,
    handler: initThankYou,
  },
];

export const initRouter = (container: Element) => {
  const goTo = (path) => {
    history.pushState({}, "", path);
    console.log("goTo", path);
    handleRouter(path);
  };

  console.log("Console.Log:::", location.pathname);
  const handleRouter = (route) => {
    console.log("El handleRoute recibió la ruta:", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });
        console.log("El", el);
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  };
  handleRouter(location.pathname);
  window.onpopstate = function () {
    handleRouter(location.pathname);
  };
};
