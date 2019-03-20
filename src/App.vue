<template>
  <div id="app">
    <!-- <Header v-if="login" /> -->
    <Popup v-if="popupShow" />
    <router-view />
  </div>
</template>

<script>
import Popup from './components/Popup.vue'
import Header from './components/Header.vue'
import { store } from './store/index'

export default {
  name: 'app',
  components: {
    Popup,
    Header,
  },
  data () {
    return {
      store,
      login: false,
      popupShow: false
    }
  },
  method: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  watch: { 
    myProp(val, oldval) { val = oldval } 
  }
}

    console.log(store)
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button { display:inline-block; margin:10px auto;}
</style>
