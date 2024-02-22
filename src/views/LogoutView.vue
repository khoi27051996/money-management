<template>
  <div>Logout...</div>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "../composables/useLogout";
export default {
  setup() {
    const { error, logOut } = useLogout();
    const router = useRouter();
    async function onLogout() {
      await logOut();
      if (!error.value) router.push({ name: "Login", params: {} });
    }
    onLogout();
    return { error };
  },
};
</script>
