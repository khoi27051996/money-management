<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <div class="mx-auto ml-2 px-8" v-if="datas.length > 0">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-xl">Total expenditures :</h1>
          <h2>{{ totalPrice.toLocaleString() }} VNĐ</h2>
        </div>
        <div
          class="border-b border-gray-300 mt-5 relative container-content"
          v-for="(data, index) in datas"
          :key="data.uid"
        >
          <div class="flex justify-between items-center">
            <div class="content">
              <h1 class="font-bold title">Category : {{ data.category }}</h1>
              <p class="py-2">With : {{ data.person }}</p>
              <p class="pb-2">Location : {{ data.location }}</p>
              <p>Price : {{ data.total.toLocaleString() }} VNĐ</p>
            </div>
            <div class="image w-[60px] h-60px" v-if="data.thumbnail">
              <img class="object-cover" :src="data.thumbnail" alt="" />
            </div>
          </div>
          <div class="count">
            <h1>{{ index + 1 }}</h1>
          </div>
          <div class="button w-full p-4 text-right">
            <button
              class="p-2 font-semibold text-red"
              @click="onDelete(data.id)"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div class="mx-auto ml-2 px-8" v-else>
        <h1 class="">You don't have any transactions yet</h1>
      </div>
    </section>
  </div>
</template>


<script>
import useRender from "../composables/useRenderData";

import { useRouter } from "vue-router";
import { nextTick, ref, watch } from "vue";

export default {
  setup() {
    const { dataRef } = useRender("transaction");
    const totalPrice = ref(0);
    const datas = dataRef.value;
    watch(datas, () => {
      nextTick(() => {
        totalPrice.value = 0;
        datas.forEach((item) => {
          totalPrice.value += item.total;
        });
      });
    });
    const router = useRouter();
    async function onDelete(id) {
      router.push({ name: "Delete", params: { idTransaction: id } });
    }

    return { datas, onDelete, totalPrice };
  },
};
</script>

<style lang="css" scoped>
.content .title {
  color: red;
}
.content .title::after {
  content: "";
  display: block;
  background: red;
  width: 100%;
  height: 2px;
}
.count {
  position: absolute;
  top: -15%;
  right: 0;
}
.count h1 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  border: 1px solid red;
  color: red;
  font-weight: bold;
}
</style>
