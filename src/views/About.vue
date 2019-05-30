<!-- 
About Component displayed upon navigation to page.
Go back link,
Tabbed interface with three sections (about, equipment, services)
 -->

<template>
  <div class="about pl-3">
    <p class="mt-4"><router-link to="/" class="main-link"><font-awesome-icon icon="arrow-alt-circle-left" id="arrow-icon"/> go back</router-link></p>
    <div class="mt-4">
      <b-tabs content-class="mt-3">
        <b-tab id="first-tab" title="about" active><p>I’ve been singing, writing music, and using my voice for imitations and impressions for as long as I can remember...</p></b-tab>
        <b-tab title="equipment">
          <p class="pb-2">I work with the most sophisticated, cutting-edge tech my money can buy!</p>
          <ul class="about-list">
            
            <li>
              <img class="pr-2" src="../assets/mic4.svg" alt="">
              Rode NT1-A Condenser Microphone
            </li>
            <li>
              <img class="pr-2" src="../assets/microphonesvg.svg" alt="">
              Shure SM-58 Dynamic Microphone
              </li>
            <li>
              <img class="pr-2" src="../assets/iconmonstr-sound-wave-2.svg" alt="">
              PreSonus Firebox Audio Interface

            </li>
            <li>
              <img class="pr-2" src="../assets/window7.svg" alt="">
              Audacity Digital Audio Editor
              </li>
          </ul>
        </b-tab>
        <b-tab title="services">
          <p class="pb-2">In addition to providing stellar voice performances, I can also:</p>
          <ul class="about-list">
            <li>
              <img class="pr-2" src="../assets/translate.svg" alt="">
              Translate your copy from Portuguese, Persian, or Spanish into English
            </li>
            <li>
              <img class="pr-2" src="../assets/edit.svg" alt="">
              Edit English texts to improve flow, clarity, and authenticity
            </li>
            <li>
              <img class="pr-2" src="../assets/write.svg" alt="">
              Write effective, engaging, funny, and memorable copy
            </li>
          </ul>
        </b-tab>
        <b-tab title="contact">
          <p class="pb-2">I'd love to work with you on your next project! Please reach out to me via:</p>
          <ul class="about-list">
            <li class="main-link">
              <img id="email-icon" class="pr-2" src="../assets/email.svg" alt="">
              E-mail
            </li>
            <li class="main-link">
              <img class="pr-2" src="../assets/phone.svg" alt="">
              Phone
            </li>
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

#first-tab___BV_tab_button__ {
  margin-left: 0;
}

.nav-link {
  padding: 0;
  padding-bottom: 0.5rem;
  margin: 0 .5rem;
  transition: color 300ms;
}


.nav-tabs {
  /* TODO: Change later when parent container is adjusted for responsiveness */
  width: 80%;
  border-bottom: 2px solid white;
}

a.nav-link.active {
  background-color: inherit !important;
}

span {
  color: white;
}


.about-list {
  color: white;
  list-style: none;
  list-style-position: inside;
  padding-left: 0;
}

.about-list > li {
  margin-top: 8px;
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

#email-icon {
  position: relative;
  top: -1px;
  fill: black;
}






</style>

