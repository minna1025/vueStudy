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
  methods: {
    logout () {
      store.state.login = false
      localStorage.clear();
      this.$router.push('/')
    }
  }
}
</script>

<style>
#header { display:flex;}
li { margin-left:auto; list-style:none; cursor:pointer; color:#333;}
a { text-decoration:none; color:#333;}
</style>
