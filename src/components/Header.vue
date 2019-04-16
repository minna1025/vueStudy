<template>
  <ul id="header">
    <li @click="logout" v-if="store.state.login"><router-link to="/">HOME</router-link></li>
    <li @click="logout" v-if="store.state.login">LOGOUT</li>
    <li v-else><router-link to="/">LOGIN</router-link></li>
  </ul>
</template>

<script>
import { store } from '../store/store'

export default {
  name: 'Header',
  data () {
    return {
      store,
    }
  },
  mounted () {
    if ( !store.state.login ){
      this.$router.push('/')
    }else {
      document.getElementById('app').classList.remove('bgLogin');
    }
  },
  methods: {
    logout () {
      store.state.login = false
      localStorage.clear();
      this.$router.push('/')
    }
  }
}
</script>
