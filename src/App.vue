<!-- 
Root component
Links to Persian and Portuguese versions,
Router-view (Displaying Home by default),
Introductory info and link to "About" view,
Audio Player (Component)
 -->

<template>
  <div id="app">
    <div class="container pt-2">
      <!-- TODO: Link to Persian and Portuguese Versions of Page -->
      <p class="text-right"><a href="#" class="lang-links farsi-link">فارسی</a> | <a href="#" class="lang-links pt-link">português</a></p>
      <router-view/>
      <!-- TODO: Audio Player goes here -->
    </div>
  </div>
</template>

<script>
</script>


<style>


/* Top level styles for text and... */
#app {
  height: 100vh;
  background-color: #4A90E2;
}

h1, h3, h4, h5, p, li {
  color: white;
  font-family: Montserrat;
  font-size: .9rem;
  line-height: 30px;
}

h1 {
  display: inline-block;
}


/* Styles for links to foreign language versions. */
.lang-links {
  color: inherit;
  font-size: .8rem;
  cursor: pointer;
}
.farsi-link {
  transition: color 300ms;
}
.farsi-link:hover {
  color: #E24A61;
  text-decoration: none;
}
.pt-link {
  transition: color 300ms;
}
.pt-link:hover {
  color: #22E530;
  text-decoration: none;
}

#media-player {
  /* TODO: Ensure media player stays in same place regardless of change in text above. */
  margin-top: 30%;
}

.main-link {
  color: white;
  transition: color 300ms
}

.main-link:hover {
  color: #e2844a;
  text-decoration: none;
}


</style>
