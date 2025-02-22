// Function to switch between tabs
function openTab(event, tabName) {
    let tabContent = document.querySelectorAll(".tab-content");
    let tabButtons = document.querySelectorAll(".tab-btn");

    tabContent.forEach(content => content.classList.remove("active"));
    tabButtons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Set default tab to 'Cashier'
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-btn").click();
});
