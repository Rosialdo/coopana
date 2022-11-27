import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Tables from '@/components/Tables'
import Maps from '@/components/Maps'
import BadGateway from '@/components/BadGateway'
import Cadastro from '@/components/Cadastro'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '/Cadastro',
      name: 'Cadastro',
      props: {page: 6},
      component: Cadastro
    },
    {
      path: '*',
      props: { page: 6 },
      redirect: '/404'
    },
  ]
})