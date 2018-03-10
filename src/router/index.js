import Vue from 'vue'
import Router from 'vue-router'
import LuckyDapp from '@/components/lucky-dapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LuckyDapp',
      component: LuckyDapp
      
    }
  ]
})
