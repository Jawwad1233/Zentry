// Toggle About Me Section (for homepage)
function toggleAbout() {
  const aboutSection = document.getElementById("about");
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
}

// Button Click Counter Example (you can add this to test JavaScript)
let count = 0;
function countClicks() {
  count++;
  document.getElementById("clickCounter").textContent = "Clicks: " + count;
}
