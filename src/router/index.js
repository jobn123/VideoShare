import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Variety from '@/components/Variety'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        { path: '/', component: HelloWorld },
        { path: 'variety', component: Variety }
      ]
    }
  ]
})
