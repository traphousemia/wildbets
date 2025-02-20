const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sidePanel = document.getElementById("side-panel");

// Open the panel
openBtn.addEventListener("click", () => {
    sidePanel.classList.add("open");
});

// Close the panel
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("open");
});












