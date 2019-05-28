<!-- 
About Component displayed upon navigation to page.
Go back link,
Tabbed interface with three sections (about, equipment, services)
 -->

<template>
  <div class="about">
    <p><router-link to="/" class="main-link"><font-awesome-icon icon="arrow-alt-circle-left" id="arrow-icon"/> go back</router-link></p>
    <div class="mt-5">
      <b-tabs content-class="mt-3">
        <b-tab title="about" active><p>I’ve been singing, writing music, and using my voice for imitations and impressions for as long as I can remember…</p></b-tab>
        <b-tab title="equipment">
          <p>I work with only the most sophisticated, cutting-edge tech my money can buy!</p>
          <ul class="about-list">
            <li>Rode NT1-A Condenser Microphone</li>
            <li>Shure SM-58 Dynamic Microphone</li>
            <li>PreSonus Firebox Audio Interface</li>
            <li>Audacity Digital Audio Editor</li>
          </ul>
        </b-tab>
        <b-tab title="services">
          <p>In addition to providing stellar voice performances, I can also:</p>
          <ul class="about-list">
            <li>Translate your copy from Portuguese, Persian, or Spanish into English</li>
            <li>Edit English texts to improve flow, clarity, authenticity, and </li>
            <li>Write effective, funny, engaging, memorable copy</li>
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

.nav-link {
  padding: 0;
  padding-bottom: 0.5rem;
  margin: 0 .5rem;
  transition: color 300ms;
}


.nav-tabs {
  /* TODO: Change later when parent container is adjusted for responsiveness */
  width: 60%;
}

a.nav-link.active {
  background-color: inherit !important;
}

span {
  color: white;
}


.about-list {
  color: white;
  list-style-position: outside;
  margin-left: 1.12em;
  padding-left: 0;
}


.nav-tabs .nav-link {
  border: none;
  color: white;
}

.nav-tabs .nav-link.active {
  color: #e2844a;
  transition: color 500ms;
}

.nav-link:hover {
  color: #e2844a;
}







</style>

