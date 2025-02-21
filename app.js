let placeholder = "placeholder-text";
let url = "not-placeholder";

while (url != placeholder) {
    url = prompt("paste URL");
    alert(`cd 3F/YouTube && yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 "${url}"`);
}