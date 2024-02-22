<template>
  <div>Deleting....!!!!!</div>
</template>
 <script>
import { useRoute, useRouter } from "vue-router";
import useDelete from "../composables/useRemove";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { deleteRecord, error } = useDelete("cardAccount");
    async function deleteTransaction() {
      await deleteRecord(route.params.idCard);
      if (!error.value) router.go(-1);
    }
    deleteTransaction();
    return { route };
  },
};
</script>
