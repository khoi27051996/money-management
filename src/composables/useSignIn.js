import { ref } from 'vue';
import { fireAuth } from '@/configs/firebase';

const error = ref(null);
const isPending = ref(false);

async function signIn(emai, password) {
  error.value = null
  isPending.value = true
  try {
    const response = await fireAuth.signInWithEmailAndPassword(emai, password)

    return response
  } catch (err) {

    switch (err.code) {
      case 'auth/invalid-email':
        error.value = "Email no invalid !!!"
        break;
      case 'auth/missing-password':
        error.value = "Password no empty"
        break;
      case 'auth/user-not-found':
        error.value = 'Wrong password ...';
        break;
      case 'auth/invalid-credential':
        error.value = 'Wrong password ...';
        break;
      default:
        console.log(err)
        break;
    }

  } finally {
    isPending.value = false
  }
}

export function useSignIn() {
  return { signIn, error, isPending }
}
