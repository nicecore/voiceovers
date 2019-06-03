<!-- 
Home Component, displayed within router-view upon navigation to page.
Header,
Introductory info and link to "About" view,
Audio Player (Component)
 -->

<template>
  <div id="home-div" class="home pl-3">
      
      <!-- 
      IDEA: Instead of underlining 'read more about me' by default, put a little icon or symbol next to it that will
      encourage the user to mouse over it, but also highlight the whole phrase and make it all clickable.

      IDEA: You need a second sentence in this blurb referencing the type of stuff you've done/can do. You still 
      need to work on this part a lot! This falls under content! Need to understand what kind of stuff you might 
      be best at marketing yourself with.
       -->
      <p id="main-paragraph" class="mt-4">
        I’m making authentic, professional, versatile voice performances in three languages. Please enjoy some samples of my work below and take a minute to <router-link to="/about" class="main-link">read more about me <font-awesome-icon icon="arrow-alt-circle-right" id="arrow-icon"/> </router-link>
        
        
      </p>
      

      
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style>

#home-div {
  height: 400px;
}





#main-paragraph {
  width: 97%;
}

#invitation {
  font-size: 1.3rem;
}

#arrow-icon {
  font-size: 1.2rem;
  margin-left: 1px;
  position: relative;
  top: 3px;
}
</style>

