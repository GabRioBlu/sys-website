window.onload = init;

function init () {
    lyrics.songs.forEach((song) => {
    var title = document.createElement("p");
    title.innerText = song.name;
    var summaryDiv = document.createElement("div");
    summaryDiv.className = "songtitle";
    summaryDiv.appendChild(title);
    var summary = document.createElement("summary");
    summary.appendChild(summaryDiv)

    var note = document.createElement("h2");
    note.innerHTML = song.note;
    var lyrics = document.createElement("p");
    lyrics.innerHTML = song.lyrics;
    var lyricsDiv = document.createElement("div");
    lyricsDiv.className = "lyrics";
    lyricsDiv.appendChild(note);
    lyricsDiv.appendChild(lyrics);

    var details = document.createElement("details");
    details.appendChild(summary);
    details.appendChild(lyricsDiv);
    document.getElementById("container").appendChild(details);
});}