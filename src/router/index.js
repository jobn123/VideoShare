import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Variety from '@/components/Variety'
import Movie from '@/components/Movie'
import Drama from '@/components/Drama'
import Short from '@/components/Short'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        { path: '/', component: Drama },
        { path: 'variety', component: Variety },
        { path: 'movie', component: Movie },
        { path: 'short', component: Short }
      ]
    }
  ]
})
