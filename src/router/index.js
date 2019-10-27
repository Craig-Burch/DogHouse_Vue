import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from '@/components/Home';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0};
  }
});
