const contentDiv = document.querySelector(".content"); 
const fullscreenButton = document.getElementById("myButton");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton"); 

const path = "../src/1205(1)/"

let videoIndex = 0;
const videoSources = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4"
];

fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        contentDiv.querySelector("video").requestFullscreen();
    }
});

nextButton.addEventListener("click", () => {
    videoIndex = (videoIndex + 1) % videoSources.length; 
    changeVideo();
});

previousButton.addEventListener("click", () => {
    videoIndex = (videoIndex - 1 + videoSources.length) % videoSources.length; 
    changeVideo();
});

function changeVideo() {
    const oldVideo = contentDiv.querySelector("video");
    if (oldVideo) {
        oldVideo.remove();
    }

    const newVideo = document.createElement("video");
    newVideo.id = "myVideo";
    newVideo.autoplay = true;
    newVideo.muted = true;
    newVideo.loop = true;
    newVideo.controls = true;

    const source = document.createElement("source");
    source.src = path + videoSources[videoIndex];
    source.type = "video/mp4"; 
    newVideo.appendChild(source);

    const fallback = document.createElement("p");
    fallback.textContent = "Your browser does not support the video tag.";
    newVideo.appendChild(fallback);

    contentDiv.appendChild(newVideo);

    newVideo.load(); 
    newVideo.play(); 
}