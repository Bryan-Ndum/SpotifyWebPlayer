document.addEventListener("DOMContentLoaded", function () {
    const testTrackId = "2cYqizR4lgvp4Qu6IQ3qGN"; // Daft Punk - Get Lucky
    console.log("Testing with Track ID:", testTrackId);

    const embedUrl = `https://open.spotify.com/embed/track/${testTrackId}`;
    console.log("Generated Embed URL:", embedUrl);

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
});

