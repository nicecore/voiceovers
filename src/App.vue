<template>
  <div id="app">
    <div class="container pt-2">
      <p class="lang-links text-right">فارسی | português</p>
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>


<style>

#app {
  height: 100vh;
  background-color: #4A90E2;
}

.lang-links {
  font-size: 14px;
}

#media-player {
  margin-top: 30%;
}

.main-link {
  color: white;

}

.main-link:hover {
  color: white;
}


</style>
