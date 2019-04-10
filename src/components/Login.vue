<template>
  <div class="login">
    <h1 class="title">{{ title }}</h1>
    <form v-on:submit.prevent="submit">
      <div>
        <label for="id">id</label>
        <input id="id" type="text" ref="id" placeholder="아이디 써줘...">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" ref="pwd" placeholder="비밀버노 써줘...">
      </div>
      <div>
        <button type="submit">LOGIN</button>
        <router-link to="/join"><button>JOIN US</button></router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'LOGIN',
      id: '',
      pwd: '',
    }
  },
  methods: {
    submit () {
      var id = this.$refs.id.value;
      var pwd = this.$refs.pwd.value;

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

      this.$http.get('/backend/member.json')
      .then( (response) => {
        const dataId = response.data.filter( dbId => dbId.id === id )
        if ( dataId.length !== 0 && dataId[0].pwd === pwd ) {
          this.id = dataId[0].id
          localStorage.setItem('user', id);
          this.$parent.store.state.login = true
          this.$router.replace(this.$route.query.redirect || '/welcome')
        }else {
          alert('누구냐 넌?');
          return false;
        }
      })
    }
  }
}
</script>
