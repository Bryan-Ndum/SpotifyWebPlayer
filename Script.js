document.getElementById("trackForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    const trackId = document.getElementById("trackId").value.trim();
    if (trackId) {
        // Embed the Spotify player
        const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
        console.log("Generated Embed URL:", embedUrl); // Debugging

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

        // Get artist name from the Spotify track page (No API Required)
        const artistName = await fetchArtistName(trackId);

        if (artistName) {
            console.log(`Artist Name: ${artistName}`);
            setArtistBackground(artistName);
        } else {
            // Set a fallback background if artist name is unavailable
            document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?music,concert,singer')`;
        }
    }
});

// Fetch the artist name from the Spotify track page (No API Key Required)
async function fetchArtistName(trackId) {
    try {
        const response = await fetch(`https://open.spotify.com/track/${trackId}`);
        const pageText = await response.text();
        const match = pageText.match(/"artists":\[{"name":"(.*?)"/);

        return match ? match[1] : null;
    } catch (error) {
        console.error("Error fetching artist name:", error);
        return null;
    }
}

// Fetch artist image from Last.fm and set it as background
async function setArtistBackground(artistName) {
    try {
        const apiKey = "b25b959554ed76058ac220b7b2e0a026"; // Public Last.fm API key
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artistName)}&api_key=${apiKey}&format=json`);
        const data = await response.json();

        if (data.artist && data.artist.image) {
            const images = data.artist.image;
            const artistImage = images[images.length - 1]["#text"]; // Get the largest image

            if (artistImage) {
                document.body.style.backgroundImage = `url(${artistImage})`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            }
        }
    } catch (error) {
        console.error("Error fetching artist image:", error);
    }
}
