function searchWiki() {
    var query = document.getElementById("searchInput").value;
    if(query.trim() !== "") {
        window.open("https://en.wikipedia.org/wiki/" + encodeURIComponent(query), "_blank");
    }
}
