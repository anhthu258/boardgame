// Tilføjer click event til sidebar toggle knap
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
  button.addEventListener("click", () => {
    closeAllDropdowns(); // Close all open dropdowns
    document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
  });
});

// Collapser sidebar i mindre skærme
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");
