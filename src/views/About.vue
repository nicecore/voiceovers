<template>
  <div class="about">
    <span>&larr; <router-link to="/" class="main-link">go back</router-link></span>
    <div class="mt-5">
      <b-tabs content-class="mt-3">
        <b-tab title="about" active><p>I’ve been singing, writing music, and using my voice for imitation and impressions for as long as I can remember…</p></b-tab>
        <b-tab title="equipment">
          <ul class="about-list">
            <li>Rode NT1-A Condenser Microphone</li>
            <li>PreSonus Firebox Audio Interface</li>
            <li>Audacity</li>
          </ul>
        </b-tab>
        <b-tab title="services">
          <p>In addition to providing stellar voice performances, I can also:</p>
          <ul class="about-list">
            <li>Translate</li>
            <li>Edit</li>
            <li>Write</li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
span {
  color: white;
}

.about-list {
  color: white;
  list-style-position: inside;
  padding-left: 0;
}

.nav-tabs {
  border-bottom: 2px solid white;
  background-color: inherit;
  color: white;
}
</style>

