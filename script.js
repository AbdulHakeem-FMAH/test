
// Selecting elements
const celebrateButton = document.getElementById('celebrate-button');

// Function to join Google Meet call
function joinGoogleMeet() {
    // Replace this with your Google Meet link
    const meetLink = "https://meet.google.com/rki-bbdt-kxp";

    // Open Google Meet link in a new tab
    window.open(meetLink, '_blank');
}

// Event listener for celebrate button
celebrateButton.addEventListener('click', joinGoogleMeet);
