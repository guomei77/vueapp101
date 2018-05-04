import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Whoweare from '@/components/Whoweare'
import Whatwedo from '@/components/Whatwedo'
import Hiring from '@/components/Hiring'
import Insights from '@/components/Insights'
import Talk from '@/components/Talk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/whoweare',
      name: 'whoweare',
      component: Whoweare
    },
    {
      path: '/whatwedo',
      name: 'whatwedo',
      component: Whatwedo
    },
    {
      path: '/hiring',
      name: 'hiring',
      component: Hiring
    },
    {
      path: '/insights',
      name: 'insights',
      component: Insights
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk
    }
  ]
})
