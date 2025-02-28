document.getElementById('trackForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get the track ID from input
    const trackId = document.getElementById('trackId').value.trim();

    if (trackId) {
        // Create Spotify embed URL
        const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

        // Create an iframe for the player
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', embedUrl);
        iframe.setAttribute('width', '300');
        iframe.setAttribute('height', '380');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('allow', 'encrypted-media');

        // Add iframe to player div
        const playerDiv = document.getElementById('player');
        playerDiv.innerHTML = ''; // Clear previous iframe
        playerDiv.appendChild(iframe);
    }
});
