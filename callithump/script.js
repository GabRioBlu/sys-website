window.onload = init;

function init() {
    lyrics.songs.forEach((song) => {
    var details = document.createElement("details");
    document.getElementById("container").appendChild(details);

    var title = document.createElement("p");
    title.innerText = song.name;
    var summaryDiv = document.createElement("div");
    summaryDiv.className = "songtitle";
    summaryDiv.appendChild(title);
    var summary = document.createElement("summary");
    summary.appendChild(summaryDiv)

    details.appendChild(summary);

    var note = document.createElement("h2");
    note.innerHTML = song.note;
    var lyricsDiv = document.createElement("div");
    lyricsDiv.className = "lyrics";
    lyricsDiv.appendChild(note);

    details.appendChild(lyricsDiv);

    song.lyrics.forEach((lyric) => {
        var lyricDiv = document.createElement("div");
        var commentsDiv = document.createElement("div");
        if(lyric.comments[0] != "") {
            lyricDiv.className = "hascomments";
            commentsDiv.className = "comments";
            lyricDiv.appendChild(commentsDiv);
            for (let i = 0; i < lyric.comments.length; i++) {
                var commentP = document.createElement("p");
                commentP.innerHTML = lyric.comments[i];
                commentsDiv.appendChild(commentP);
            }
        }
        for(let i = 0; i < lyric.lines.length; i++) {
            var lyricP = document.createElement("p");
            // lyricP.innerHTML += (i > 0 ? "<br>" : "") + lyric.lines[i] + ((lyric.lines[i] == "" && i == lyric.lines.length - 1) ? "<br>" : "");
            lyricP.innerHTML += lyric.lines[i] + (lyric.lines[i] == "" ? "<br>" : "");
            lyricDiv.appendChild(lyricP);
        }
        lyricsDiv.appendChild(lyricDiv);
    });
});}