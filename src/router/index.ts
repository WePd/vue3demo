import { createRouter, createWebHistory } from "vue-router"

import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/Home/index.vue"
import Member from "@/views/Member/index.vue"
import UserInfo from "@/views/Member/components/UserInfo.vue"
import UserOrder from "@/views/Member/components/UserOrder.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "member",
          component: Member,
          redirect: "member/user",
          children: [
            {
              path: "user",
              component: UserInfo,
            },
            {
              path: "order",
              component: UserOrder,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
})

export default router
