// Updated: Fixing Spotify Player Issue
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("trackForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload

        const trackId = document.getElementById("trackId").value.trim();
        console.log("Entered Track ID:", trackId); // Debugging: Log track ID

        if (trackId) {
            const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
            console.log("Generated Embed URL:", embedUrl); // Debugging: Log the URL

            // Remove any old iframes
            const playerDiv = document.getElementById("player");
            playerDiv.innerHTML = "";

            // Create new iframe and add it to the page
            const iframe = document.createElement("iframe");
            iframe.setAttribute("src", embedUrl);
            iframe.setAttribute("width", "100%");
            iframe.setAttribute("height", "380");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowtransparency", "true");
            iframe.setAttribute("allow", "encrypted-media");

            playerDiv.appendChild(iframe);
            console.log("Spotify Player Added!");
        } else {
            console.warn("No track ID entered!"); // Log warning if no track ID
        }
    });
});
