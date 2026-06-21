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
        if(lyric.comments[0].lines[0] != "") {
            lyricDiv.className = "hascomments";
            lyricDiv.addEventListener("mouseover", commentAlign);
            var commentsDiv = document.createElement("div");
            commentsDiv.className = "comments";
            lyricDiv.appendChild(commentsDiv);

            for (let i = 0; i < lyric.comments.length; i++) {
                commentsDiv.innerHTML += (i > 0 ? "<br>" : "");
                lyric.comments[i].lines.forEach((line) => {
                    var commentP = document.createElement("p");
                    commentP.innerHTML = line + (line == "" ? "<br>" : "");
                    commentsDiv.appendChild(commentP);
                });
            }

            // for (let i = 0; i < lyric.comments[0].lines.length; i++) {
            //     var commentP = document.createElement("p");
            //     commentP.innerHTML = lyric.comments[0].lines[i] + (lyric.comments[0].lines[i] == "" ? "<br>" : "");
            //     commentsDiv.appendChild(commentP);
            // }
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

window.onscroll = commentAlign;

function commentAlign() {
    Array.from(document.getElementsByClassName("comments")).forEach((comment) => {
        if (comment.checkVisibility()) {
            // console.log(window.innerHeight - comment.getBoundingClientRect().bottom);
            if (comment.getBoundingClientRect().y < 0) {
                comment.style.position = "fixed";
                comment.style.top = 0;
            }
            else if (comment.parentElement.getBoundingClientRect().y >= 0 && comment.getBoundingClientRect().y == 0) {
                comment.style.position = "absolute";
                comment.style.top = "auto";
            }
            else if (window.innerHeight - comment.getBoundingClientRect().bottom < 0) {
                comment.style.position = "fixed";
                comment.style.bottom = 0
            }
            else if (window.innerHeight - comment.parentElement.getBoundingClientRect().y - comment.getBoundingClientRect().height >= 0 && comment.getBoundingClientRect().bottom == window.innerHeight) {
                comment.style.position = "absolute";
                comment.style.bottom = "auto";
            }
        }
    });
};