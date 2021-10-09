const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    // Select all the sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    // Time Display
    const timeDisplay = document.querySelector('.time-display');

    // Get the length of the outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    // Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    })

    // function specific to stop and play the sounds
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            play.src = './svg/pause.svg';
        } else {
            song.pause();
            play.src = './svg/play.svg';
        }
    }

    // animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsedTime = fakeDuration - currentTime;
        // seconds jump back to 0 when elapsed time is 60
        let seconds = Math.floor(elapsedTime % 60);
        let minutes = Math.floor(elapsedTime / 60);

        // animate the circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

    };
    
};

app();