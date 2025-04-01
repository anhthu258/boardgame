document.getElementById("popupButton").addEventListener("click", function() {
    // Hide all popups
    document.querySelectorAll(".popup").forEach(popup => popup.style.display = "none");

    // List of popup IDs
    const popups = ["popup1", "popup2", "popup3", "popup4", "popup5"];

    // Get a random popup
    const randomPopup = popups[Math.floor(Math.random() * popups.length)];

    // Show the selected popup
    document.getElementById(randomPopup).style.display = "block";
});

// Function to close popups
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}