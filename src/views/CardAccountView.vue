<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <div class="px-8 ml-2" v-if="datas.length > 0">
        <h1 class="font-bold text-xl">Manage your card account :</h1>
        <div
          class="flex justify-between items-center mt-5 border-b py-3"
          v-for="(data, index) in datas"
          :key="data.id"
        >
          <div class="content-cardAccount">
            <h2>
              <span class="font-bold">Card Number</span> : {{ data.cardNumber }}
            </h2>
            <h2>
              <span class="font-bold">Bank Name</span> : {{ data.bankName }}
            </h2>
            <h2>
              <span class="font-bold">Account Number</span> :
              {{ data.accountNumber }}
            </h2>
            <h2>
              <span class="font-bold">Password Card</span> : {{ data.password }}
            </h2>
          </div>
          <div
            class="count-cardAccount border border-red rounded-full w-[40px] h-[40px] text-center leading-10"
          >
            <h1 class="text-red" @click="onDelete(data.id)">{{ index + 1 }}</h1>
          </div>
        </div>
      </div>
      <div class="px-8 ml-2" v-else>
        <h1>You haven't added any accounts to manage</h1>
      </div>
      <div class="addReport flex justify-center mt-5">
        <button
          class="border border-red p-3 rounded-lg text-red"
          @click="switchPage"
        >
          Add New Card
        </button>
      </div>
    </section>
  </div>
</template>


<script>
import useRender from "@/composables/useRenderData";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { dataRef } = useRender("cardAccount");
    const datas = dataRef.value;

    const router = useRouter();
    function switchPage() {
      router.push({ name: "addCard", params: {} });
    }
    function onDelete(id) {
      router.push({ name: "deleteCard", params: { idCard: id } });
    }
    return { datas, switchPage, onDelete };
  },
};
</script>
