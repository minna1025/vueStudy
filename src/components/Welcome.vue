<template>
  <div id="welcome">
    <Header />
    <h1 class="welcome">WhatsUp {{ id }}</h1>
  </div>
</template>

<script>
import { store } from '../store/index'
import Header from './Header.vue'

export default {
  name: 'Welcome',
  components: {
    Header,
  },
  data() {
    return {
      id: localStorage.getItem('user'),
      store,
    }
  }
}
</script>