import { ref } from 'vue';
import { fireStore } from "@/configs/firebase"

const useDelete = (name) => {
  const error = ref(null)


  async function deleteRecord(idRecord) {
    error.value = null
    try {
      await fireStore.collection(name).doc(idRecord).delete()

      return "Delete success..."
    } catch (err) {

      error.value = err.message
    }
  }
  return { deleteRecord, error }
}
export default useDelete
