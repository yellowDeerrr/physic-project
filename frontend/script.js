const contentDiv = document.querySelector(".content");
const fullscreenButton = document.getElementById("fullscreenButton");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const videoText = document.querySelector(".video-text");

const path = "../src/1205(1)/";

let videoIndex = 0;
const videoLength = 11;

// Array to hold text for each video
const videoTexts = [
    "Text for Video 1",
    "This is the second video!",
    "Video number three here",
    "Fourth video's text",
    "Fifth video's text",
    "Sixth video's text",
    "Seventh video's text",
    "Eighth video's text",
    "Ninth video's text",
    "Text for the tenth video",
    "This is the eleventh video!"
];





// floating window

const floatingWindow = document.getElementById("floatingWindow");
const closeWindowButton = document.getElementById("closeWindow");

// Make the floating window draggable
floatingWindow.onmousedown = function(event) {
    let shiftX = event.clientX - floatingWindow.getBoundingClientRect().left;
    let shiftY = event.clientY - floatingWindow.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        floatingWindow.style.left = pageX - shiftX + 'px';
        floatingWindow.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    floatingWindow.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        floatingWindow.onmouseup = null;
    };
};

floatingWindow.ondragstart = function() {
    return false; // Prevent default drag behavior
};

// Close the floating window
closeWindowButton.addEventListener("click", () => {
    floatingWindow.style.display = "none"; // Hide the window
});

// floating window








fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        contentDiv.querySelector("video").requestFullscreen();
    }
});

nextButton.addEventListener("click", () => {
    videoIndex = (videoIndex + 1) % videoLength;
    changeVideo();
});

previousButton.addEventListener("click", () => {
    videoIndex = (videoIndex - 1 + videoLength) % videoLength;
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
    source.src = path + (videoIndex + 1 + ".mp4");
    source.type = "video/mp4";
    newVideo.appendChild(source);

    const fallback = document.createElement("p");
    fallback.textContent = "Your browser does not support the video tag.";
    newVideo.appendChild(fallback);

    contentDiv.appendChild(newVideo);

    newVideo.load();
    newVideo.play();

    // Update the text content
    videoText.textContent = videoTexts[videoIndex];
}


