import { ref } from 'vue';
import { fireAuth } from "@/configs/firebase"
const error = ref(null)


async function logOut() {

  error.value = null
  try {
    const response = await fireAuth.signOut()

    return response
  } catch (err) {

    error.value = err.message
  }
}
export function useLogout() {
  return { error, logOut }
}
