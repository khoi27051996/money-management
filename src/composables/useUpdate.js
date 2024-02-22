
import { fireAuth } from '@/configs/firebase'




const useUpdatePhoto = (string) => {
  fireAuth.currentUser.updateProfile({
    photoURL: string
  }).then(() => { }).catch((err) => console.log(err));
}

const useUpdateName = (name) => {
  fireAuth.currentUser.updateProfile({
    displayName: name
  }).then(() => { }).catch((err) => console.log(err))
}
export { useUpdatePhoto, useUpdateName }
