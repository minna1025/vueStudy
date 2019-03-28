<template>
  <ul class="list tweet-list">
    <li v-for="(item, index) in tweets">
      <ul>
        <li class="msg">{{ item.msg }}</li>
        <li class="name">{{ item.name }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import store from '../store/store'

export default {
  data () {
    return {
      store,
      tweets: []
    }
  },
  created () {
    this.$http.get('/backend/tweet.json')
      .then( (response) => {
        for ( var item in response.data ) {
          this.tweets.push(response.data[item]);
        }
      })
  },
  methods: {

  }
}
</script>