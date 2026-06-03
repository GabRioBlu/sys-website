window.onload = init;

function init() {
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
    var lyricsDiv = document.createElement("div");
    lyricsDiv.className = "lyrics";
    lyricsDiv.appendChild(note);

    song.lyrics.forEach((lyric) => {
        var lyricP = document.createElement("p");
        for(let i = 0; i < lyric.lines.length; i++) {
            lyricP.innerHTML += (i > 0 ? "<br>" : "") + lyric.lines[i] + ((lyric.lines[i] == "" && i == lyric.lines.length - 1) ? "<br>" : "");
        }
        lyricsDiv.appendChild(lyricP);
    });

    var details = document.createElement("details");
    details.appendChild(summary);
    details.appendChild(lyricsDiv);
    document.getElementById("container").appendChild(details);
});}