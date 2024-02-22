<template>
  <div class="screen">
    <div class="return">
      <button type="button" @click="returnPage">
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>
    </div>
    <form @submit.prevent="onSubmit" class="px-8 ml-2">
      <h1 class="font-bold text-xl">ADD NEW CARD</h1>
      <div class="mt-2">
        <label for="cardNumber"> 1 . Card Number </label>

        <input
          v-model="cardNumber"
          type="text"
          id="cardNumber"
          placeholder="Example: 08081233412 "
          class="w-full p-3 mt-2 outline-none"
        />
      </div>
      <div class="mt-2">
        <label for="bankName"> 2 . Bank Name </label>
        <input
          v-model="bankName"
          type="text"
          id="bankName"
          placeholder="Example: DongA Bank"
          class="w-full p-3 mt-2 outline-none"
        />
      </div>
      <div class="mt-2">
        <label for="accountNumber"> 3 . Account number </label>
        <input
          v-model="accountNumber"
          type="text"
          id="accountNumber"
          placeholder="Example: 081355121"
          class="w-full p-3 mt-2 outline-none"
        />
      </div>
      <div class="mt-2">
        <label for="password"> 4 . Password </label>
        <input
          v-model="password"
          type="text"
          id="password"
          placeholder="Example: 081355121"
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
    const cardNumber = ref("");
    const bankName = ref("");
    const accountNumber = ref("");
    const password = ref("");
    const { addRecord, error } = useCollection("cardAccount");
    const { getUser } = useUser();
    const { user } = getUser();
    function returnPage() {
      router.go(-1);
    }
    async function onSubmit() {
      const cardAccount = {
        cardNumber: parseInt(cardNumber.value),
        bankName: bankName.value,
        accountNumber: parseInt(accountNumber.value),
        password: password.value,
        userId: user.value.uid,
      };
      await addRecord(cardAccount);
      if (!error.value) returnPage();
    }
    return {
      returnPage,
      onSubmit,
      cardNumber,
      bankName,
      accountNumber,
      password,
      error,
    };
  },
};
</script>
