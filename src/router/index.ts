import { createRouter, createWebHistory } from 'vue-router'
import CreatePaymentView from '../views/CreatePaymentView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import PaymentsListView from '../views/PaymentsListView.vue'
import AccountView from '../views/AccountView.vue'
import CreateNewGroupView from '../views/CreateNewGroupView.vue'

export enum WebRoutes {
  account = 'account',
  login = 'login',
  signup = 'signup',
  groups = 'groups',
  bundles = 'bundles',
  categories = 'categories',
  invoices = 'invoices',
  incomes = 'incomes',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${WebRoutes.account}`,
      name: 'account_page',
      component: AccountView,
    },
    {
      path: '/payments/create',
      name: 'payments_create',
      component: CreatePaymentView,
    },
    {
      path: '/payments/',
      name: 'payments_list',
      component: PaymentsListView,
    },
    {
      path: `/${WebRoutes.login}`,
      name: 'login',
      component: LoginView,
    },
    {
      path: `/${WebRoutes.signup}`,
      name: 'signup',
      component: SignUpView,
    },
    {
      path: `/${WebRoutes.groups}/new`,
      name: 'CreateNewGroup',
      component: CreateNewGroupView,
    },
    {
      path: `/${WebRoutes.groups}`,
      name: 'groups',
      component: SignUpView, // TODO: replace mock
    },
    {
      path: `/${WebRoutes.invoices}`,
      name: 'invoices',
      component: SignUpView, // TODO: replace mock
    },
    {
      path: `/${WebRoutes.incomes}`,
      name: 'incomes',
      component: SignUpView, // TODO: replace mock
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((...params) => {
  console.log('beforeEach router callback: ', params);
});

export default router
