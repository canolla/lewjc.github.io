document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname; // Get the current page path
    const navLinks = document.querySelectorAll("#navbar li a"); // Select all nav links

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); // Add the active class to the matching link
        }
    });
});

// Open the overlay with the clicked image
function openOverlay(imageSrc) {
    const overlay = document.getElementById('imageOverlay');
    const enlargedImg = document.getElementById('enlargedImg');
    enlargedImg.src = imageSrc; // Set the source of the enlarged image
    overlay.style.display = 'flex'; // Show the overlay
}

// Close the overlay
function closeOverlay() {
    const overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none'; // Hide the overlay
}

// Add event listeners to all images with the "enlargeable" class
document.querySelectorAll('.enlargeable').forEach((img) => {
    img.addEventListener('click', () => openOverlay(img.src));
});
