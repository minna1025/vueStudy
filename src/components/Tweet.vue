<template>
  <div id="tweet">
    <div id="wirte-wrap">
      <textarea v-model="newTweet" />
      <button id="writeBtn" v-on:click="addTweet" >남길래..</button>
      <!-- <ul id="sort-wrap">
        <li><button id="sortBtnDate">Date</button></li>
        <li><button id="sortBtnTime">Time</button></li>
      </ul> -->
    </div>
    <TweetList />
  </div>
</template>

<script>
import { store } from '../store/store'
import TweetList from './TweetList'


export default {
  name: 'Tweet',
  components: {
    TweetList
  },
  data() {
    return {
      store,
      newTweet: "",
    }
  },
  methods: {
    addTweet: function() {
      let tweets = this.$parent.store.state.tweets;
      const date = new Date();
      let formattedDate = date.toISOString().slice(0,10);

      tweets.push({
        index : tweets.length + 1,
        thumb : 'none',
        name : localStorage.user,
        startDate : formattedDate,
        msg : this.newTweet,
      });

      this.newTweet = ''
    },
  }
}
</script>