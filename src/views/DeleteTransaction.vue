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
    const { deleteRecord, error } = useDelete("transaction");
    async function deleteTransaction() {
      await deleteRecord(route.params.idTransaction);
      if (!error.value) router.push({ name: "Home", params: {} });
    }
    deleteTransaction();
    return { route };
  },
};
</script>
