<template>
  <div class="home">
      
      <h1><strong>Hi, I'm Adam.</strong></h1>
      
      <p id="main-paragraph" class="mt-5">I’m using my voice to create authentic, professional, and versatile performances for a wide range of projects in three languages. Enjoy some samples of my work below and <u><router-link to="/about" class="main-link">read more about me.</router-link></u> I’d love to work with you on your next project!</p>

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

h1 {
  display: inline-block;
}

p {

}



h1, p {
  color: white;
  font-family: Montserrat;
  line-height: 30px;
}

/* #about-link {
  text-decoration: underline;
  color: white;

} */



</style>

