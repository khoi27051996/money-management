<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <div class="flex justify-center items-center h-[80vh]">
        <div class="return">
          <button type="button" @click="returnPage">Return</button>
        </div>
        <form @submit.prevent="onSubmit" class="px-8 ml-2">
          <h1 class="font-bold text-xl">ADD NEW BUDGET</h1>
          <div class="mt-2">
            <label for="title"> 1 . Title </label>
            <input
              v-model="title"
              type="text"
              id="title"
              placeholder="Example: Salary january"
              class="w-full p-3 mt-2 outline-none"
            />
          </div>
          <div class="mt-2">
            <label for="content"> 2 . Content </label>
            <input
              v-model="content"
              type="text"
              id="content"
              placeholder="Example: 350 $"
              class="w-full p-3 mt-2 outline-none"
            />
          </div>
          <div class="error" v-if="error">
            <p class="text-red">{{ error }}</p>
          </div>
          <div
            class="addRe flex items-center justify-center mx-auto relative mt-5"
          >
            <button type="submit" class="text-red font-semibold z-10">
              ADD
            </button>
            <div class="loading"></div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCollection from "../composables/useCollection";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const title = ref("");
    const content = ref(0);
    const router = useRouter();
    const { getUser } = useUser();
    const { user } = getUser();
    const { addRecord, error } = useCollection("budget");

    function returnPage() {
      router.go(-1);
    }
    async function onSubmit() {
      const budget = {
        title: title.value,
        content: parseInt(content.value),
        userId: user.value.uid,
      };
      await addRecord(budget);
      if (!error.value) returnPage();
    }

    return { returnPage, title, content, error, onSubmit };
  },
};
</script>
