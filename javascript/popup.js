const popups = ["popup1", "popup2", "popup3", "popup4", "popup5"]; // List of popup IDs
let unusedPopups = [...popups]; // Clone the list to track unused popups

document.getElementById("popupButton").addEventListener("click", function () {
    // Hide all popups
    document.querySelectorAll(".popup").forEach(popup => popup.style.display = "none");

    // Check if there are unused popups
    if (unusedPopups.length === 0) {
        alert("All hints have been used!");
        return; // Stop further execution
    }

    // Get a random popup from the unused list
    const randomIndex = Math.floor(Math.random() * unusedPopups.length);
    const randomPopup = unusedPopups[randomIndex];

    // Show the selected popup
    document.getElementById(randomPopup).style.display = "block";

    // Remove the displayed popup from the unused list
    unusedPopups.splice(randomIndex, 1);
});

// Function to close popups
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}