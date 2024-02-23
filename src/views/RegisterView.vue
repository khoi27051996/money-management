<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Error  -->
      <h1 v-if="error" class="text-red">{{ error }}</h1>
      <!-- Form  -->
      <form class="flex flex-col space-y-3" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 bg-gray-300"
              type="text"
              placeholder="iMoney...."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 bg-gray-300"
              type="text"
              placeholder="iMoney@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 bg-gray-300"
              type="password"
              placeholder="Your password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Register
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

      <!-- Diresction -->
      <div class="text-center w-full mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link to="/login" class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signUp(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: "Login", params: {} });
    }
    return { onSubmit, fullName, email, password, error, isPending };
  },
};
</script>
