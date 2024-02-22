<template>
  <div class="flex justify-center items-center h-[80vh]">
    <div class="return">
      <button type="button" @click="returnPage">Return</button>
    </div>
    <form @submit.prevent="onSubmit" class="px-8 ml-2">
      <h1 class="font-bold text-xl">ADD NEW REPORT</h1>
      <div class="mt-2">
        <label for="title"> 1 . Title </label>
        <input
          v-model="title"
          type="text"
          id="title"
          placeholder="Example: Lend"
          class="w-full p-3 mt-2 outline-none"
        />
      </div>
      <div class="mt-2">
        <label for="content"> 2 . Content </label>
        <input
          v-model="content"
          type="text"
          id="content"
          placeholder="Example: Give you pay 350 $"
          class="w-full p-3 mt-2 outline-none"
        />
      </div>
      <div class="error" v-if="error">
        <p class="text-red">{{ error }}</p>
      </div>
      <div class="addRe flex items-center justify-center mx-auto relative mt-5">
        <button type="submit" class="text-red font-semibold z-10">ADD</button>
        <div class="loading"></div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const content = ref("");
    const { getUser } = useUser();
    const { user } = getUser();

    const { addRecord, error } = useCollection("myreport");
    async function onSubmit() {
      const myreport = {
        title: title.value,
        content: content.value,
        userId: user.value.uid,
      };
      await addRecord(myreport);
      if (!error.value) router.go(-1);
    }
    function returnPage() {
      router.go(-1);
    }
    return { returnPage, title, content, onSubmit, error };
  },
};
</script>

