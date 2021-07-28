const clap = new Audio ('sounds\crash.mp3');
const crash = new Audio ('sounds\snare.mp3');
const openhit = new Audio ('sound/open-hithat.wav');
const kick = new Audio ('sound/kick.wav');
const closedhit = new Audio ('sound/closed-hithat.wav');
const snare = new Audio ('sound/snare.wav');

window.addEventListener('keydown', e =>{
    const keydown = e.code;


if (keydown === "KeyA") {
    clap.play();

} else if (keydown === "KeyS") {
    crash.play();

} else if (keydown === "KeyD") {
    openhit.play();

} else if (keydown === "KeyF") {
    kick.play();

} else if (keydown === "KeyG") {
    closedhit.play();

} else if (keydown === "KeyH") {
    snare.play();

}

window.addEventListener('click', (e) =>{
    const keyCode = e.code;


if (keyCode === "KeyA") {
    clap.play();
    
} else if (keyCode === "KeyS") {
    crash.play();
    
} else if (keyCode === "KeyD") {
    openhit.play();
    
} else if (keyCode === "keyF") {
    kick.play();
    
} else if (keyCode === "KeyG") {
    closedhit.play();
    
} else (keyCode === "keyH") {
    snare.play();
