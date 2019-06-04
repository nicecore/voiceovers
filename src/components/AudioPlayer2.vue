<template>
<div>
    <button id="playPauseBtn" v-on:click="playPause">Play</button>
    <input 
    v-model="seek"
    ref="seekBar"
    class="ml-4"
    type="range"
    min="0"
    max="100"
    value="0"
    step="1">
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
    <h2 id="playlistStatus"></h2>
    <select name="" size="3" id="myPlaylist">
        <option value="AT1">AT1</option>
        <option value="AT2">AT2</option>
        <option value="AT3">AT3</option>
    </select>
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
            seek: 0,
        }
    },
    mounted() {
        var track = new Audio();
        track.src = require('../assets/AT1.mp3');
        track.addEventListener("timeupdate", this.updateTime)
        this.activeTrack = track;
    },
    methods: {
        updateTime: function() {
            // Shorten down the activeTrack.currentTime
            var cTime = this.activeTrack.currentTime
            // Get the new value for the seekbar by multiplying the current time by
            // 100 divided by the duration
            var newTime = cTime * (100 / this.activeTrack.duration)
            // Update the seekbar
            this.$refs.seekBar.value = newTime
        },
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

