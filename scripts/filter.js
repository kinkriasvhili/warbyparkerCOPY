import { loadFilteredProducts } from "./loadPage/filteredProductsLoad.js";
import { loadFilter } from "./loadPage/filterHtmlLoad.js";
export async function filter(type) {
  await loadFilter();
  const chevronDown = document.querySelectorAll(".fa-chevron-down");
  const filterUls = document.querySelectorAll(".filterUl");
  activeFilter();
  chooseParagraph();
  chevronDown.forEach((chevron) => {
    chevron.addEventListener("click", () => {
      let filterId = chevron.getAttribute("filterid");
      filterUls.forEach((filterUl) => {
        if (
          filterId == filterUl.getAttribute("filterid") &&
          !filterUl.classList.contains("ulActive")
        ) {
          chevron.classList.toggle("rotate");
          filterUl.classList.add("ulActive");
        } else if (
          filterUl.classList.contains("ulActive") &&
          filterId == filterUl.getAttribute("filterid")
        ) {
          console.log();
          chevron.classList.toggle("rotate");
          filterUl.classList.remove("ulActive");
        }
      });
    });
  });
  document
    .querySelector(".buttons-box button")
    .addEventListener("click", () => {
      loadFilteredProducts(type);
    });
}

function chooseParagraph() {
  const filterParagraphs = document.querySelectorAll(".filterUl div p");
  filterParagraphs.forEach((paragraph) => {
    paragraph.addEventListener("click", () => {
      const filterId =
        paragraph.parentElement.parentElement.getAttribute("filterId");
      if (!paragraph.classList.contains("activeFilter")) {
        filterParagraphs.forEach((p) => {
          if (
            filterId == p.parentElement.parentElement.getAttribute("filterId")
          ) {
            p.classList.remove("activeFilter");
          }
        });
        paragraph.classList.add("activeFilter");
      } else {
        paragraph.classList.remove("activeFilter");
      }
    });
  });
}

function activeFilter() {
  const mainButton = document.querySelector(".filter-btn");
  const filterContainer = document.querySelector(".filter-container");

  mainButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from propagating to the document
    if (!filterContainer.classList.contains("filter-active")) {
      filterContainer.classList.add("filter-active");
      document.body.style.overflow = "hidden"; // Disable scroll
      createOverlay(); // Add the dark overlay
      disableFilter(filterContainer); // Close filter when clicked outside
    }
  });
}

function disableFilter(filterContainer) {
  document.addEventListener("click", (event) => {
    if (!filterContainer.contains(event.target)) {
      filterContainer.classList.remove("filter-active");
      document.body.style.overflow = "auto"; // Re-enable scroll
      removeOverlay(); // Remove the dark overlay
    }
  });
  document
    .querySelector(".buttons-box button")
    .addEventListener("click", (event) => {
      filterContainer.classList.remove("filter-active");
      document.body.style.overflow = "auto"; // Re-enable scroll
      removeOverlay(); // Remove the dark overlay
    });
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
}

function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
}
