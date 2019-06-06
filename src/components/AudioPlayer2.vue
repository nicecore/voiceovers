<template>
<div>
    <button id="playPauseBtn" v-on:click="playPause">Play</button>
    <!-- <input
    @input="seekTime()"
    v-model="seek"
    ref="seekBar"
    class="ml-4"
    type="range"
    min="0"
    max="100"
    step="1"> -->
    <div id="timebox">
        <!-- Time goes here -->
    </div>
    <button ref="muteBtn" id="muteBtn" @click="mute">Mute</button>
    <input
    @input="updateVolume(volume)"
    v-model="volume"
    class="ml-4"
    type="range"
    min="0"
    max="100"
    value="100"
    step="1"
    id="volumeBar">
    <div class="mt-5">
        <ul class="about-list">
            <li>
                <p class="d-inline lang-label eng-label"><strong>eng</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads a poem</p>
            </li>
            <li>
                <p class="d-inline lang-label eng-label"><strong>eng</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam does a funny voice</p>
            </li>
            <li>
                <p class="d-inline lang-label eng-label"><strong>eng</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads another poem</p>
            </li>
            <li>
                <p class="d-inline lang-label per-label"><strong>per</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads a poem</p>
            </li>
            <li>
                <p class="d-inline lang-label per-label"><strong>per</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads another poem</p>
            </li>
            <li>
                <p class="d-inline lang-label por-label"><strong>por</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads a radio commercial</p>
            </li>
            <li>
                <p class="d-inline lang-label por-label"><strong>por</strong></p>
                <p class="d-inline ml-2 playlist-item">Adam reads a poem in Portuguese</p>
            </li>
        </ul>
    </div>


</div>

</template>


<script>
export default {
    name: 'AudioPlayer',
    data() {
        return {
            playlists: {
                // Separate playlists for each language
                // These will be the tabs on the player
                english: ["file1", "file2", "file3"],
                persian: ["file1", "file2", "file3"],
                portuguese: ["file1", "file2", "file3"],
            },
            playlistIndex: 0,
            activePlaylist: undefined,
            activeTrack: undefined,
            volume: 100,
            // seek: 0,
        }
    },
    mounted() {
        var track = new Audio();
        track.src = require('../assets/AT1.mp3');
        track.addEventListener("timeupdate", this.updateTime)
        this.activeTrack = track;
    },
    methods: {
        // seekTime: function(event) {
        //     // Get the value of where user clicked
        //     var skipTime = event.target.value
        //     // Multiply the duration by where the user clicked divided by 100
        //     var newTime = skipTime * (100 / this.activeTrack.duration)
        //     // Set this.activeTrack.currentTime to newTime
        //     this.activeTrack.currentTime = newTime
        // },
        // updateTime: function() {
        //     // Shorten down the activeTrack.currentTime
        //     var cTime = this.activeTrack.currentTime
        //     // Get the new value for the seekbar by multiplying the current time by
        //     // 100 divided by the duration
        //     var newPosition = cTime * (100 / this.activeTrack.duration)
        //     // Update the seekbar
        //     this.seek = newPosition
        // },
        playPause: function(value) {
            // If user triggers playPause from the playlists
            if (value) {
                // var track = new Audio();
                // Set the src attribute
                // Set track to this.activeTrack
                // Deal with Promise to play track
            }
            // If user clicks on play button while track is paused
            if (this.activeTrack.paused) {
                this.activeTrack.play()
                // Change button to pause graphic
            } else { 
                this.activeTrack.pause()
                // Change button to play graphic
            }
        },
        mute: function() {
            if (this.activeTrack.muted) {
                // TODO: Change mute button
                this.activeTrack.muted = false;
            } else {
                // TODO: Change mute button
                this.activeTrack.muted = true;

            }
        },
        updateVolume: function(volume) {
            this.activeTrack.volume = volume / 100
        },
        showCurrentTime: function() {
            console.log(this.activeTrack.currentTime)
        }

    }
}
</script>

<style>

.playlist-item {
    transition: color 300ms;
}

.playlist-item:hover {
    cursor: pointer;
    color: orange;
}

.lang-label {
    position: relative;
    top: -1px;
    font-size: .8rem;
    padding: .3rem;
    border-radius: 10px;
    background-color: white;
}

.eng-label {
    color: #e2844a;
}

.per-label {
    padding: .37rem;
    color: #E24A61;
}

.por-label {
    padding: .37rem;
    color: #22E530;
}


</style>
