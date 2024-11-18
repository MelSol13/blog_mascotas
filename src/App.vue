<template>
  <div id="app">

    <HeaderInicio v-if="showHeader" />  
    <router-view />
  </div>
</template>

<script>

import HeaderInicio from './components/HeaderInicio.vue';

export default {
  name: 'App',
  components: {
    HeaderInicio,  
  },
  computed: {
    
    showHeader() {
      return this.$route.path === '/';
    }
  }
};
</script>
