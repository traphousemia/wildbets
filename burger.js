const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sidePanel = document.getElementById("side-panel");
const body = document.body;

// Open the panel
openBtn.addEventListener("click", () => {
    sidePanel.classList.add("open");
    body.classList.add("side-panel-open"); // Add class to body to hide the burger button
});

// Close the panel
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("open");
    body.classList.remove("side-panel-open"); // Remove class to show the burger button
});

