<template>
  <ul id="header">
    <li @click="logout">logout</li>
  </ul>
</template>

<script>
import { store } from '../store/index'

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
      console.log(this)
      this.$router.push('/')
    }
  }
}
</script>
