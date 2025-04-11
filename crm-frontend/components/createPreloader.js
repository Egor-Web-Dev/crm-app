import icons from "./icons.js";

function createPreloader() {
  const preloaderBlock = document.createElement("div");
  const preloaderCircle = document.createElement("span");

  preloaderBlock.classList.add("preloader", "flex");
  preloaderCircle.classList.add("loader");

  preloaderCircle.innerHTML = icons.loaderSvg;

  preloaderBlock.append(preloaderCircle);

  return preloaderBlock;
}

export default createPreloader;
