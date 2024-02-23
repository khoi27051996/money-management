<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <div v-if="datas.length > 0">
        <div
          class="mx-auto ml-2 p-8 relative"
          v-for="(data, index) in datas"
          :key="data.id"
        >
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">
              My report {{ index + 1 }} : {{ data.title }}
            </h1>
          </div>
          <div
            class="border-b border-gray-300 mt-5 relative container-content py-2"
          >
            <div class="flex justify-between items-center">
              <div class="content">
                <h1 class="font-semibold title">
                  Content : {{ data.content }}
                </h1>
              </div>
            </div>
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
        <h1 class="">You don't have any report yet</h1>
      </div>
      <div class="addReport flex justify-center mt-5">
        <button
          class="border border-red p-3 rounded-lg text-red"
          @click="switchPage"
        >
          Add New Report
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import useRender from "@/composables/useRenderData";
import { useRouter } from "vue-router";

import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const { dataRef } = useRender("myreport");
    const datas = dataRef.value;
    const err = ref(null);
    function switchPage() {
      router.push({ name: "AddReport", params: {} });
    }
    async function onDelete(id) {
      router.push({ name: "DeleteReport", params: { idMyReport: id } });
    }

    return { switchPage, datas, onDelete, err };
  },
};
</script>

<style lang="css" scoped>
.addReport button:hover {
  background-color: #f28080;
  color: white;
}
</style>
