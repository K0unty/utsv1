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
    <button class="btn"> <a href="${
      new URL("./L/S1/10/index.html", import.meta.url).href
    }" target="_blank">S110<br>adjusted-project</a>
    </button>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S2/index.html", import.meta.url).href
    }" target="_blank">S2-AllTS</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S3/index.html", import.meta.url).href
    }" target="_blank">S3</a>
    </button>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S4/index.html", import.meta.url).href
    }" target="_blank">S4</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S5/index.html", import.meta.url).href
    }" target="_blank">S5</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S6/index.html", import.meta.url).href
    }" target="_blank">S6</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S7/index.html", import.meta.url).href
    }" target="_blank">S7</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S8/index.html", import.meta.url).href
    }" target="_blank">S8</a>
    </button>
    <button class="btn"> <a href="${
      new URL("./L/S9/p0/index.html", import.meta.url).href
    }" target="_blank">S8</a>
    </button>
    <button class="btn"> Suck </button>
    
  <div>
`;
