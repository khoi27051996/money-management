import { createRouter, createWebHistory } from "vue-router";
import { fireAuth } from '../configs/firebase'



// Auth Guard 
const requireAuth = (to, from, next) => {
  const user = fireAuth.currentUser;
  if (!user) next({ name: "Login", params: {} })
  else next()
}

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Home",
      leading: false,
      isShowFooter: true
    },
    component: () => import("../views/IndexView.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "My Profile",
      leading: false,
      isShowFooter: true
    },
    component: () => import("../views/ProfileView.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      layout: "default"
    },
    component: () => import("../views/LogoutView.vue")
  },
  {
    path: "/delete/:idTransaction",
    name: "Delete",
    meta: {
      layout: "default"
    },
    component: () => import("../views/DeleteTransaction.vue")
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true
    },
    component: () => import("../views/ReportView.vue")
  },
  {
    path: "/addReport",
    name: "AddReport",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: false
    },
    component: () => import("../views/NewReport.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/delete/:idMyReport",
    name: "DeleteReport",
    meta: {
      layout: "default"
    },
    component: () => import("../views/DeleteReport.vue")
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true
    },
    component: () => import("../views/BudgetView.vue")
  },
  {
    path: "/delete/:idBudget",
    name: "DeleteBudget",
    meta: {
      layout: "default"
    },
    component: () => import("../views/DeleteBudget.vue")
  },
  {
    path: "/addBudget",
    name: "addBudget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: false
    },
    component: () => import("../views/NewBudget.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/transaction",
    name: "Transaction",
    meta: {
      text: "Transaction",
      leading: false,
      isShowFooter: false
    },
    component: () => import("../views/NewTransactionView.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth"
    },
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      text: "About",
      leading: false,
      isShowFooter: true
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: "/tool",
    name: "Tool",
    meta: {
      text: "Tool",
      leading: false,
      isShowFooter: true
    },
    component: () => import('../views/TootleView.vue')
  },
  {
    path: "/cardAccount",
    name: "CardAccount",
    meta: {
      text: "Card Account",
      leading: false,
      isShowFooter: true
    },
    component: () => import('../views/CardAccountView.vue')
  },
  {
    path: "/addCardAccount",
    name: "addCard",
    meta: {
      text: "Card Account",
      leading: false,
      isShowFooter: false
    },
    component: () => import("../views/NewCardAccount.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/delete/:idCard",
    name: "deleteCard",
    meta: {
      text: "Card Account",
      leading: false,
      isShowFooter: false
    },
    component: () => import("../views/DeleteCard.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
