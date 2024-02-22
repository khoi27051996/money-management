import { ref } from 'vue';
import { fireStorage } from "@/configs/firebase";
import { useUser } from './useUser'

const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null)
  const filePath = ref(null);
  const url = ref(null)
  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`

    const fileRef = fireStorage.ref(filePath.value)

    try {
      const response = await fileRef.put(file);
      url.value = await response.ref.getDownloadURL();
      return url.value
    } catch (err) {
      console.log(err)
      error.value = err.message
    }
  }
  return { uploadFile, error, filePath, url }
}
export default useStorage
