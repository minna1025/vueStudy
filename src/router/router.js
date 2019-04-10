import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Join from '@/components/Join'
import Welcome from '@/components/Welcome'
import NotFound from '@/components/404'

// 뷰 어플리케이션에 라우터 플러그인 추가!
Vue.use(Router)

// Router 클래스 함수로 라우터 객체 생성
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
      // component: Welcome
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})