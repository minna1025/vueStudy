<template>
  <div class="join">
    <h1>{{ title }}</h1>
    <form @submit.prevent="submit">
      <div class="input-row">
        <label for="id">id</label>
        <input id="id" type="text" ref="id" placeholder="아이디 써줘...">
      </div>
      <div class="input-row">
        <label for="password">Password</label>
        <input id="password" type="password" ref="pwd" placeholder="비밀버노 써줘...">
      </div>
      <div class="input-row">
        <label for="password-check">Password Check</label>
        <input id="password-check" type="password" ref="pwdCheck" placeholder="비밀버노 다시 한 번 써줘...">
      </div>
      <div class="input-row">
        <input id="agree-check" type="checkbox" ref="agreeCheck" @click='handleAgree'>
        <label for="agree-check">약관동의스</label>
      </div>
      <div>
        <button type="submit" id="joinBtn">JOIN</button>
        <router-link to="/" class="button" id="backBtn">BACK</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from '../store/store'

export default {
  name: 'Join',
  store,
  data () {
    return {
      title: 'JOIN US',
      id: '',
      pwd: '',
      pwdCheck: ''
    }
  },
  mounted () {
    document.getElementById('app').classList.remove('bgLogin');
  },
  methods: {
    submit () {
      var id = this.$refs.id.value;
      var pwd = this.$refs.pwd.value;
      var pwdCheck = this.$refs.pwdCheck.value;
      var agree = this.$refs.agreeCheck.checked;

      if ( id === '' ){
        alert('적어라 아이디');
        document.getElementById('id').focus();
        return false;
      }
      if ( pwd === '' ){
        alert('적어라 비밀버노');
        document.getElementById('password').focus();
        return false;
      }
      if ( pwdCheck === '' || pwdCheck !== pwd ){
        alert('확인해라 비밀버노');
        document.getElementById('password-check').focus();
        return false;
      }

      let jsonData = {};
      jsonData.push

      this.$http.get('/backend/member.json')
      .then( data => {
        console.log(this)
      } )

      // localStorage.setItem('joinId', id);
      // localStorage.setItem('joinpwd', pwd);
      // this.$router.replace(this.$route.query.redirect || '/')
    },
    handleAgree () {
      this.$parent.store.state.popupShow = !this.$parent.store.state.popupShow
    }
  }
}
</script>
