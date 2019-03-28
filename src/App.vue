<template>
  <div id="app">
    <Header v-if="store.state.login" />
    <Popup v-if="store.state.popupShow" />
    <router-view />
  </div>
</template>

<script>
import Popup from './components/Popup.vue'
import Header from './components/Header.vue'
import { store } from './store/store'

export default {
  name: 'app',
  components: {
    Popup,
    Header,
  },
  data () {
    return {
      store
    }
  },
  created () {
    if ( !store.state.login ){
        this.$router.push('/')
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
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button { display:inline-block; margin:10px auto;}
</style>
