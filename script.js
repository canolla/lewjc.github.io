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

// Function to check if the device is mobile
function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Add event listeners to the video elements
document.querySelectorAll('.project video').forEach((video) => {
    if (isMobileDevice()) {
        // Mobile: Pause videos by default, play on click
        video.pause(); // Ensure videos are paused initially
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    } else {
        // Desktop: Autoplay and loop
        video.play();
        video.setAttribute('loop', true);
        video.setAttribute('autoplay', true);
        video.setAttribute('muted', true);
    }
});
