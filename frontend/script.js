const contentDiv = document.querySelector(".content");
const fullscreenButton = document.getElementById("fullscreenButton");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const videoText = document.querySelector(".video-text");
const timeDilation = document.getElementById("timeDilation")

const path = "../src/1205(1)/";

let videoIndex = 0;
const videoLength = 11;

// Array to hold text for each video
const videoTexts = [
    "Ми існуємо у чотиривимірному всесвіті. Три виміри - просторові: довжина, ширина і висота. Четвертий вимір - час. Теорія відносності Ейнштейна показала, що простір і час переплітаються, утворюючи простір-час. Це означає, що час - не просто окрема сутність, а радше фундаментальна частина тканини нашої реальності.",
    "Для простоти візьмемо вісі: x та часу.",
    "Тепер для ясності модернізуємо наш простір-час",
    "Ми бачимо, як приблизно викривляється час під дією гравітації. І, що саме головне, для яблук час протікає по різному, у нижнього помаліше. Якщо взяти два однакових відрізка, у вехнього це наприклад 3 секунди, а у нижньго менше. Формула по якій викривляється час і геометрія простору Gμν + Λgμν =  κTμν",
    "Тут зображено викривлення простору від гравітації. І, що цікаво - локально, зміна напрямку корабля не відбулася. Викривився саме простір, а не змінився напрямок.",
    "Гравітація настільки викривляє простір, що навіть фотони, одні з найфундаментальніших частинок всесвіту, піддаються дії гравітації. І як було з попереднім прикладом, фотон для себе самого рухався по прямій",
    "Уявимо, що космонавт падає в чорну діру. Його власні години будуть такіж, як і до цього. Але зі сторони він буде сповільнуватися в часі. А для самого космонавта навпаки, зовнішній світ буде тільки пришвидшуватися у часі, через викривлення часу.",
    "Але через силу тяжіння, так ще й, у чорній дірі, швидкість космонавта буде тільки зростати і може досягти дуже близького значення, до швидкості світла. І тут спрацьовує ефект сповільнення часу за формулою ",
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
    if (videoIndex == 7){
        timeDilation.style.display = "flex";
    }else{
        timeDilation.style.display = "none";
    }

}


