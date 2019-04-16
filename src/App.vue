<template>
  <div id="app" class="">
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
  mounted () {
    if ( !store.state.login ){
      this.$router.push('/')
      document.getElementById('app').classList.add('bgLogin');
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

<style lang="scss">
   @import '/assets/sass/style.scss'
</style>
