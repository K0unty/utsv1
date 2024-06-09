import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>
      UTS WOrk - Work Start - Friday June 07, 2024
    </h1>
    <h3>
      Buttons below represent each section work    
    </h3>
  </div>
  <div class="button">
    <button class="btn"> <a href="https://megasite.meanworld.com/trailers/2425_jadeluv_mb.mp4" target="_blank">BtnTest</a> </button>
    <button class="btn"> <a href="${
      new URL(
        "./L/S1/UTS1/first-project/first-project/index.html",
        import.meta.url
      ).href
    }" target="_blank">Lesson1<br>first-project</a>
    </button>
    <button class="btn"> <a href="${
      new URL(
        "./L/S1/UTS1/adjusted-project/adjusted-project/index.html",
        import.meta.url
      ).href
    }" target="_blank">Lesson1<br>adjusted-project</a>
    </button>
    <button class="btn"> Suck </button>
    
  <div>
`;
