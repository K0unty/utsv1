import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>
      UTS Learn
    </h1>
  </div>
  <div class="button">
    <button class="btn"> <a href="https://megasite.meanworld.com/trailers/2425_jadeluv_mb.mp4" target="_blank">BtnTest</a> </button>
    <button class="btn"> <a href="L/S1/UTS1/first-project/first-project/" target="_blank">Lesson1</a> </button>
    <button class="btn"> Suck </button>
  <div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
