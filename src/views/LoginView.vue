<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Form  -->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              v-model="email"
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 bg-gray-300"
              type="text"
              placeholder="iMoney@gmail.com"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              v-model="password"
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 bg-gray-300"
              type="password"
              placeholder="Your password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Login
          </button>
          <button
            v-else
            disabled
            type="button"
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-none"
          >
            Waiting for minutes....
          </button>
        </div>
      </form>
      <!-- ERROR  -->
      <h1 v-if="error" class="text-red">{{ error }}</h1>
      <!-- Diresction -->
      <div class="text-center w-full mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link to="/register" class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { signIn, error, isPending } = useSignIn();
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return { onSubmit, email, password, error, isPending };
  },
};
</script>
