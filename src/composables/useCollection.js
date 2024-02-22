import { ref } from 'vue';
import { fireStore } from "@/configs/firebase"

const useCollection = (name) => {
  const error = ref(null)
  async function addRecord(record) {
    error.value = null
    try {
      const response = await fireStore.collection(name).add(record)
  
      return response
    } catch (err) {

      error.value = err.message
    }
  }
  return { addRecord, error }
}
export default useCollection
