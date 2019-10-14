<template>
  <main class="mt-1 pt-3 mb-4">
  <mdb-container>
    <div class ="hideJ"> </div>
      <ul  class="juicer-feed" data-feed-id="thedoghouselimerick"><h1 class="referral"><a href="https://www.juicer.io"></a></h1></ul>

</mdb-container>
</main>
</template>

<script>
import { mdbContainer } from 'mdbvue';
export default {
  name: 'Gallery',
  components: {
      mdbContainer,
  },
  data () {
    return {
      
    };
  },
  methods: {
   },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CocolorDark {
  background-color: #008B9A !important;
}
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.masonry-with-flex div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    background: #975A58;
    color: white;
    margin: 0.5rem;
    font-weight: 900;
    font-size: 2rem;
  }
  .hideJ {
    position: absolute;
    background-color: white;
    border: 1px solid white;
    top: 5;
    width: 75%;
    height: 35px;
    z-index: 2;
  }
</style>
