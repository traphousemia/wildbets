// Function to switch between tabs
function openTab(evt, tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the clicked tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    evt.currentTarget.classList.add('active');
}

// Function to update the current balance based on selected currency
function updateBalance() {
    const selectedCategory = document.getElementById('currency-category').value;
    const balanceAmount = document.getElementById('balance-amount');
    const selectedCategoryText = document.getElementById('selected-category');

    // Update the balance based on the selected category
    let balance = 0;
    if (selectedCategory === "osrs-gold") {
        balance = 1000.00;
    } else if (selectedCategory === "rs3-gold") {
        balance = 5000.00;
    } else if (selectedCategory === "bitcoin") {
        balance = 0.15;  // Example balance in BTC
    } else if (selectedCategory === "ethereum") {
        balance = 2.5;   // Example balance in ETH
    } else if (selectedCategory === "dogecoin") {
        balance = 10000; // Example balance in DOGE
    } else if (selectedCategory === "tether") {
        balance = 2000.00;  // Example balance in USDT
    }

    // Display the selected currency and balance
    selectedCategoryText.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ');
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

// Function to handle sending currency
function sendCurrency() {
    const recipient = document.getElementById('recipient').value;
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;

    if (!recipient || !amount) {
        alert("Please enter a recipient and amount.");
        return;
    }

    alert(`Sent ${amount} ${currency} to ${recipient}`);
}

// Function to handle password change
function changePassword() {
    const currentPassword = document.querySelector('input[placeholder="Current Password"]').value;
    const newPassword = document.querySelector('input[placeholder="New Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm New Password"]').value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Password changed successfully.");
}
