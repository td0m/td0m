const format = (str, v) => str.replaceAll("1", v)
document.addEventListener("DOMContentLoaded", () => {
  const labelled = document.querySelectorAll("[data-label]");
  console.log(labelled)
  labelled.forEach((e) => {
    const str = e.getAttribute("data-label") || "1";
    const rows = e.querySelectorAll("div");
    rows.forEach((row) => {
      let v = row.style.getPropertyValue("--v");
      row.style.setProperty("--l", `"${format(str, v)}"`);
    });
  });
});