function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    clockElement.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("search-button").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value;
    if (searchInput) {
        
        const encodedSearch = encodeURIComponent(searchInput);
        const googleSearchURL = `https://www.google.com/${encodedSearch}`;
        
        
        window.open(googleSearchURL, "_blank");
    }
});
document.getElementById("facebook-icon").addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/pagina-dvs";
});

document.getElementById("twitter-icon").addEventListener("click", function () {
    window.location.href = "https://twitter.com/";
});

document.getElementById("youtube-icon").addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/canaldvs";
});

document.getElementById("instagram-icon").addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/pagina-dvs";
});