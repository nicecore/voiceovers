<!-- 
Audio Player component, embedded in Home component under router-view.
 -->

<template>
<div>
    <button id="playPauseBtn">Play</button>
    <input
    class="ml-4"
    type="range"
    min="0"
    max="100"
    value="0"
    step="1"
    id="seekBar">
    <div id="timebox">
        <!-- Time goes here -->
    </div>
    <button id="muteBtn">Mute</button>
    <input
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
import { initAudioPlayer } from '../audioPlayer.js';

export default {
    name: 'AudioPlayer',
    data() {
        return {

        }
    },
    mounted() {
        initAudioPlayer()
    }
}
</script>

<style>

</style>

