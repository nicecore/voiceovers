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


#app {
  /* Ensure background color stretches to bottom of viewport */
  height: 100vh;
  background-color: #4A90E2;
}

.lang-links {
  color: inherit;
  font-size: .8rem;
  cursor: pointer;
}

.farsi-link {
  transition: color 200ms;
}

.farsi-link:hover {
  color: #22E530;
  text-decoration: none;
}

.pt-link {
  transition: color 200ms;
}

.pt-link:hover {
  color: #E24A61;
  text-decoration: none;
}



#media-player {
  /* TODO: Ensure media player stays in same place regardless of change in text above. */
  margin-top: 30%;
}

.main-link {
  color: white;
  transition: color 200ms
}

.main-link:hover {
  color: #e2844a;
  text-decoration: none;
}


</style>
