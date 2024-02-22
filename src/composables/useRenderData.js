import { ref } from 'vue'
import { fireStore } from '../configs/firebase'
import { useUser } from '../composables/useUser'
export const useRender = (name) => {
  const dataRef = ref([])
  const { getUser } = useUser();
  const { user } = getUser()
  const query = fireStore.collection(name).where('userId', '==', user.value.uid);
  query.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const data = doc.data();
      dataRef.value.push({ ...data, id: doc.id })
    })
  })
  
  return { dataRef }
}
export default useRender

