document.getElementById("trackForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const trackId = document.getElementById("trackId").value.trim();
    console.log("Entered Track ID:", trackId); // Debugging Track ID

    if (trackId) {
        const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
        console.log("Generated Embed URL:", embedUrl); // Debugging Embed URL

        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", embedUrl);
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("height", "380");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("allow", "encrypted-media");

        const playerDiv = document.getElementById("player");
        playerDiv.innerHTML = "";
        playerDiv.appendChild(iframe);
    } else {
        console.warn("No track ID entered!"); // Warn if no input is provided
    }
});
