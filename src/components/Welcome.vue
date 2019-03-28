<template>
  <div id="welcome">
    <h1 class="welcome">WhatsUp {{ id }}</h1>
    <Tweet />
  </div>
</template>

<script>
import { store } from '../store/store'
import Tweet from './Tweet.vue'
import Header from './Header.vue'

export default {
  name: 'Welcome',
  components: {
    Header,
    Tweet
  },
  data() {
    return {
      id: localStorage.getItem('user'),
      store,
    }
  }
}
</script>