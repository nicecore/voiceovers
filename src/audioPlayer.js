// export initAudioPlayer()


// #region Filetype designation
// Still not sure if this will be necessary. 
// TODO: Make sure this part is even necessary

// Set default extension for audio files.
var ext = ".mp3";
// Lowercase userAgent string.
var agent = navigator.userAgent.toLowerCase();

if (agent.indexOf('firefox') != -1 || agent.indexOf('opera') != -1) {
    ext = ".ogg";
}
// #endregion


function initAudioPlayer() {
    var track, playBtn, muteBtn, seekBar, volumeBar,
    seeking, curTimeText, durTimeText, dir, playlist,
    playlistIndex, playlistStatus, myPlaylist;
    dir = "audio/";
    playlist = ["AT1", "AT2", "AT3"];
    playlistIndex = 0;

    // #region Object references
    playBtn = document.getElementById('playPauseBtn');
    muteBtn = document.getElementById('muteBtn');
    seekBar = document.getElementById('seekBar');
    volumeBar = document.getElementById('volumeBar');
    // curTimeText = document.getElementById('curTimeText');
    // durTimeText = document.getElementById('durTimeText');
    // playlistStatus = document.getElementById('playlistStatus');
    myPlaylist = document.getElementById('myPlaylist');
    // #endregion

    // Queue up first track for playing
    track = new Audio();
    // Extension stuff, commented out for testing 6/3
    // audio.src = dir + playlist[0] + ext;

    // Bypass extension stuff for testing 6/3
    // track.src = "./audio/" + playlist[0] + ".mp3";
    track.src = "https://www.dropbox.com/s/z324y8ax4ju7fc3/AT1.mp3"

    track.loop = false;
    // Set innerHTML - may need to be changed
    // playlistStatus.innerHTML = "Track " + (playlistIndex + 1) + " - " + playlist[playlistIndex]

    // #region Event handlers

    playBtn.addEventListener("click", playPause);

    // Change time point of audio from user's mousemoves on seekBar
    seekBar.addEventListener("mousemove", function(event) { seek(event) });
    // Reset seeking = false when user mouses up from seekBar
    seekBar.addEventListener("mouseup", function() { seeking = false; });
    volumeBar.addEventListener("mousemove", setVolume);
    track.addEventListener("timeupdate", seekTimeUpdate);
    track.addEventListener("ended", function() { nextTrack() });
    myPlaylist.addEventListener("change", changeTrack);

    // #endregion

    // Functions

    function playPause() {
        if (track.paused) {
            console.log(track)
            var playPromise = track.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    alert("Music should be playing")
                })
                .catch(error => {
                    alert("There was an error.")
                    
                })
            }
            // TODO: Change play button to pause
        // If audio ISN'T paused and the button is hit
        } else {
            track.pause();
            // TODO: Set button to pause
        }
    }

    function mute() {
        if(track.muted) {
            track.muted = false;
            // TODO: Set mute button style to show unmuted
        } else {
            track.muted = true;
            // TODO: Set mute button style to show muted
        }
    }

    function setVolume() {
        // Volume in browser ranges from 0-10
        // Our slider goes from 0-100
        // We therefore take the volumeBar's value provided
        // by the user playing with it and set the volume to
        // the product of that divided by 100
        track.volume = volumeBar.value / 100;
    }

    function seek(event) {

        if(seeking) {
            // Reset seekbar's value to the difference between
            // its inherent position (in terms of distance from the left side
            // of the screen) and the distance from the beginning of the
            // seekBar that the user has clicked.
            seekBar.value = event.clientX - seekBar.offsetLeft;
            // Get the product of the audio's duration and the seekBar's value divided by 100.
            // This 
            var seekTo = track.duration * (seekBar.value / 100);
            track.currentTime = seekTo;
        }
    }

    // TODO: Refactor depending on how we decide to do the seekBar.
    function seekTimeUpdate() {
        // Update seekBar as audio plays.
        var nt = track.currentTime * (100 / track.duration);
        seekBar.value = nt;
        var curMins = Math.floor(track.currentTime / 60);
        var curSecs = Math.floor(track.currentTime - (curMins * 60));
        var durMins = Math.floor(track.duration / 60);
        var durSecs = Math.floor(track.duration - (durMins * 60));
        if (curSecs < 10) { curSecs = "0" + curSecs; }
        if (curMins < 10) { curMins = "0" + curMins; }
        if (durSecs < 10) { durSecs = "0" + durSecs; }
        if (durMins < 10) { durMins = "0" + durMins; }
        curTimeText.innerHTML = curMins + ":" + curSecs;
        durTimeText.innerHTML = durMins + ":" + durSecs;
    }

    function nextTrack() {
        // 1. Deal with playlist logic so we stay on track
        // 2. Update track info, add active class to right line on playlist, etc.
        // 3. Play track
        // 2 and 3 can be function calls
        
        if (playlistIndex === (playlist.length - 1)) {
            playlistIndex = 0;
        } else {
            playlistIndex++;
        }
        // TODO: Update track info (helper function?)
        track.src = dir + playlist[playlistIndex] + ".mp3";
        // Play audio
        // Make sure playPause() is kosher and then maybe just call it here?
    }

    function changeTrack(event) {
        track.src = dir + event.target.value + ".mp3";
        // Change playBtn style
        // Play audio
    }
}
// Might could call this in the component's created() hook.
// window.addEventListener("load", initAudioPlayer);



export { initAudioPlayer };