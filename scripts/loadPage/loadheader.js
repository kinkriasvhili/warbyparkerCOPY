// import { headerStyle } from "../pageStyles/headerStyle.js";
import { headerStyle } from "../pageStyles/headerStyle.js";

export async function loadHeader() {
  try {
    const response = await fetch("htmlComponents/header.html");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const headerHtml = await response.text();
    document.getElementById("header-placeholder").innerHTML = headerHtml;
    headerStyle();
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

loadHeader();
