export async function loadFilter() {
  try {
    const response = await fetch("htmlComponents/filterLoad.html");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const headerHtml = await response.text();
    document.getElementById("filter").innerHTML = headerHtml;
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

loadFilter();
