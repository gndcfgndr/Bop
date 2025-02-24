function copyAddress(id) {
    const svgElement = document.getElementById(id + 'Input');
    const title = svgElement.getAttribute('title');

    navigator.clipboard.writeText(title).then(() => {
        alert('copied the discord to clipboard: @' + title);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function removeOverlay() {
    var overlay = document.getElementById('overlay');
    var userpage = document.getElementById('user-page');
    var audio = document.getElementById('backgroundsong')

    overlay.style.opacity = '0';
    userpage.style.display = 'flex';
    audio.volume = 0.3;
    audio.play();

    setTimeout(function() {
        overlay.style.display = 'none';
    }, 2000);
}

function toggleMusic() {
    var mutebtn = document.getElementById("mutetext");
    if (mutebtn.innerHTML === "off") mutebtn.innerHTML = "on";
    else mutebtn.innerHTML = "off";

    var audio = document.getElementById('backgroundsong');
    audio.muted = !audio.muted;
}

// ============ Title Typing (tab title) ============
document.addEventListener("DOMContentLoaded", () => {
    const prefix = "⠐ ";
    const titleText = "amruu";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        document.title = prefix + titleText.substring(0, index);

        if (!isDeleting && index < titleText.length) {
            index++;
            setTimeout(typeWriter, 200);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeWriter, 200);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeWriter, 1000);
        }
    }
    typeWriter();
});

// =========== Main Typewriter for .typewriter Elements ===========
document.addEventListener("DOMContentLoaded", function () {
    // 1) Fetch the custom_status from your backend
    fetch('https://crazyp.art/discord-profile')
        .then(response => response.json())
        .then(data => {
            // If there's no custom_status, fall back to something
            const customStatus = data.custom_status || "No custom status found!";

            // 2) Insert that as the first item in the typewriter array
            const texts = [
                customStatus,
                "email me: autism@amruu.bio",
                "Sup",
                "I no have autism",
                "Sigma boi",
                "Hi am amruu",
                "Lol Hru?",
                "Wow! Am good too thx",
                "*Evil*",
                "Are you from Ohio?",
                "Lets trade mangos in Ohio",
                "Mouahahahaha"
            ];

            const elements = document.querySelectorAll('.typewriter');
            const typingSpeed = 100;
            const pauseDuration = 1000;
            let currentIndex = 0;

            elements.forEach((element) => {
                element.textContent = '';
                let textIndex = 0;
                let forward = true;

                function typeWriter() {
                    const currentText = texts[currentIndex];

                    if (forward) {
                        // typing forward
                        if (textIndex < currentText.length) {
                            element.textContent += currentText.charAt(textIndex);
                            textIndex++;
                            setTimeout(typeWriter, typingSpeed);
                        } else {
                            // done typing currentText; pause, then start deleting
                            setTimeout(() => {
                                forward = false;
                                typeWriter();
                            }, pauseDuration);
                        }
                    } else {
                        // deleting backwards
                        if (textIndex > 0) {
                            textIndex--;
                            element.textContent = currentText.substring(0, textIndex);
                            setTimeout(typeWriter, typingSpeed);
                        } else {
                            // done deleting; go to next text
                            currentIndex = (currentIndex + 1) % texts.length;
                            forward = true;
                            setTimeout(typeWriter, pauseDuration);
                        }
                    }
                }
                typeWriter();
            });
        })
        .catch(err => {
            console.error("Failed to fetch custom_status for the typewriter:", err);
        });
});
