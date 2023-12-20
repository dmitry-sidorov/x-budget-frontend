import { createRouter, createWebHistory } from 'vue-router'
import CreatePaymentView from '@/views/CreatePaymentView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import PaymentsListView from '@/views/PaymentsListView.vue'
import AccountView from '@/views/AccountView.vue'
import GroupsListView from '@/views/GroupsListView.vue'
import CreateNewGroupView from '@/views/CreateNewGroupView.vue'
import AuthTokenStorage from '@/auth-token-storage'

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

export enum PageName {
  Account = 'AcccoutPage',
  Bundles = 'BundlesPage',
  Categories = 'Categories',
  Login = 'LoginPage',
  Signup = 'SignupPage',
  CreateGroup = 'CreateGroupPage',
  Groups = 'GroupsPage',
  Invoices = 'InvoicesPage',
  Incomes = 'IncomesPage',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: PageName.Account}
    },
    {
      path: `/${WebRoutes.account}`,
      name: 'AcccoutPage',
      component: AccountView,
    },
    {
      path: '/payments/create',
      name: 'payments_create',
      component: CreatePaymentView, // TODO: refactor to invoices
    },
    {
      path: '/payments/',
      name: 'payments_list',
      component: PaymentsListView, // TODO: refactor to invoices
    },
    {
      path: `/${WebRoutes.login}`,
      name: PageName.Login,
      component: LoginView,
    },
    {
      path: `/${WebRoutes.signup}`,
      name: PageName.Signup,
      component: SignUpView,
    },
    {
      path: `/${WebRoutes.groups}/new`,
      name: 'CreateGroupPage',
      component: CreateNewGroupView,
    },
    {
      path: `/${WebRoutes.groups}`,
      name: PageName.Groups,
      component: GroupsListView,
    },
    {
      path: `/${WebRoutes.invoices}`,
      name: PageName.Invoices,
      component: SignUpView, // TODO: replace mock
    },
    {
      path: `/${WebRoutes.incomes}`,
      name: PageName.Incomes,
      component: SignUpView, // TODO: replace mock
    },
    {
      path: `/${WebRoutes.categories}`,
      name: PageName.Categories,
      component: SignUpView, // TODO: replace mock
    },
    {
      path: `/${WebRoutes.bundles}`,
      name: PageName.Bundles,
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

router.beforeEach((to, from) => {
  if (!AuthTokenStorage.isTokenValid()
      && ![PageName.Login, PageName.Signup].includes(to.name as PageName)
  ) {
    console.log('router !isTokenValid');
    return { name: PageName.Login }
  }
});

export default router
