import { loadHeader } from "./loadPage/loadHeader.js";
import { loadFooter } from "./loadPage/loadfooter.js";
import { loadFavouriteSearches } from "../scripts/loadPage/searchLoad.js";
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadFavouriteSearches();
});
