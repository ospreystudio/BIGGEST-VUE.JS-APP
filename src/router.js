import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoahesList from './pages/coaches/CoahesList';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from "./pages/auth/UserAuth";
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoahesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistation, meta: {requiresAuth: true}},
    { path: '/requests', component: RequestsReceived, meta: {requiresAuth: true}},
    { path: '/auth', component: UserAuth, meta: {requiresUnauth: true} },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

  router.beforeEach(function(to, _, next) {
      if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
      } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches')
      } else {
        next();
      }
  })

export default router;