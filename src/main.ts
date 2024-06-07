import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>
      UTS Learn
    </h1>
  </div>
  <div class="button">
    <button class="btn"> <a href="https://megasite.meanworld.com/trailers/2425_jadeluv_mb.mp4" target="_blank">BtnTest</a> </button>
    <button class="btn"> <a href="${
      new URL(
        "./L/S1/UTS1/first-project/first-project/index.html",
        import.meta.url
      ).href
    }" target="_blank">Lesson1</a>
    </button>
    <button class="btn"> Suck </button>
  <div>
`;
