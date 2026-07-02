window.onload = init;

function createElement(type, attributes, content) {
    let element = document.createElement(type);
    for (let attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    element.innerHTML = content || null;
    return element;
}

function init() {
    lyrics.songs.forEach((song) => {
    let details = document.createElement("details");
    document.getElementById("container").appendChild(details);

    let summary = createElement("summary", {class: "songtitle"});
    summary.appendChild(createElement("p", {}, song.name));

    details.appendChild(summary);

    let lyricsDiv = createElement("article", {class: "lyrics"});
    lyricsDiv.appendChild(createElement("h2", {}, song.note));

    details.appendChild(lyricsDiv);

    song.lyrics.forEach((lyric) => {
        let lyricChunk = document.createElement("div");
        if(lyric.comments[0].lines[0] != "") {
            lyricChunk.className = "hascomments";
            lyricChunk.addEventListener("mouseover", commentAlign);
            let commentsDiv = createElement("div", {class: "comments"})
            lyricChunk.appendChild(commentsDiv);

            lyric.comments.forEach((comment) => {
                let commentChunk = document.createElement("section");
                let icon = createElement("img", {src: "icons/" + comment.icon + ".png"});
                commentChunk.appendChild(icon);
                let commentElement = document.createElement("div");
                commentChunk.appendChild(commentElement);

                for(let i = 0; i < comment.lines.length; i++) {
                    commentElement.innerHTML += (i > 0 ? "<br>" : "") + comment.lines[i];
                }

                commentsDiv.appendChild(commentChunk);
            });
        }
        for(let i = 0; i < lyric.lines.length; i++) {
            // let lyricP = document.createElement("p");
            // lyricP.innerHTML += (i > 0 ? "<br>" : "") + lyric.lines[i] + ((lyric.lines[i] == "" && i == lyric.lines.length - 1) ? "<br>" : "");
            // lyricP.innerHTML += lyric.lines[i] + (lyric.lines[i] == "" ? "<br>" : "");
            // lyricChunk.appendChild(lyricP);

            lyricChunk.innerHTML += (i > 0 ? "<br>" : "") + lyric.lines[i] + ((lyric.lines[i] == "" && i == lyric.lines.length - 1) ? "<br>" : "");
        }
        lyricsDiv.appendChild(lyricChunk);
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