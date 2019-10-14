<template>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar" dark position="top" style="background-color: #008B9A" scrolling :scrollingOffset="20">
      <!-- <mdb-container> -->
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
        <img src="./assets/images/dh-logo-navbar.png">
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/" waves-fixed>Home</mdb-nav-item> 
          <mdb-nav-item to="/Gallery" waves-fixed>Gallery</mdb-nav-item> 
          <!-- <mdb-nav-item 
           
            waves-fixed
            v-on:click="scroll()">
             Services
          </mdb-nav-item> --> 
          <mdb-nav-item to="/Contact" waves-fixed>Contact</mdb-nav-item> 
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
     <!-- </mdb-container> -->
    </mdb-navbar>
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <mdb-footer style="background-color: #008B9A" class="marginTopFooter">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href=""> The Dog House</a>
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
  },
  data () {
    return {
    };
  },
  methods: {
  }
};

</script>

<style>

.marginTopFooter {
 margin-top: 0px !important;
}
.flyout {
  display:flex;
  flex-direction: column;
  min-height:100vh;
  justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}
</style>
