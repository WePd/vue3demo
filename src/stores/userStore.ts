import { UserInfo } from "./../api/model/userModel"
import { defineStore } from "pinia"
import { ref } from "vue"
import { LoginAPI } from "@/api/user.ts"

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({} as Partial<UserInfo>)

    const getUserInfo = async ({
      account,
      password,
    }: {
      account: string
      password: string
    }) => {
      const res = await LoginAPI({ account, password })
      userInfo.value = res.result
    }

    const clearUserInfo = () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  }
  // {
  //   persist: true,
  // }
)
