<template>
  <div id="tweet">
    <div id="wirte-wrap">
      <textarea v-model="newTweet" />
      <button id="writeBtn" type="submit">남길래..</button>
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
      this.newTweet = ''
    },
    submit() {
      let tweets = this.$parent.store.state.tweets;
      console.log(1);
      const date = new Date();
      let formattedDate = moment(date).format('YYYY.MM.DD');

      console.log(2);
      tweets.push({
        index : tweets.length + 1,
        thumb : 'none',
        name : localStorage.getItem(user),
        startDate : formattedDate,
        msg : newTweet,
      });

      console.log(` end : ${tweets}`);
      this.newTweet = ''
    }
  }
}
</script>