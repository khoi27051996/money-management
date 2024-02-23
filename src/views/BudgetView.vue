<template>
  <div class="screen">
    <div class="absolute py-20 w-full">
      <div class="" v-if="datas.length > 0">
        <div
          class="mx-auto ml-2 px-8 relative"
          v-for="(data, index) in datas"
          :key="data.id"
        >
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">
              My budget {{ index + 1 }} : {{ data.title }}
            </h1>
          </div>
          <div
            class="border-b border-gray-300 mt-5 relative container-content py-2"
          >
            <div class="flex justify-between items-center">
              <div class="content">
                <h1 class="font-semibold title">
                  Content : {{ data.content.toLocaleString() }}
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
        <h1 class="">You don't have any budget yet</h1>
      </div>
      <div class="addReport flex justify-center mt-5">
        <button
          class="border border-red p-3 rounded-lg text-red"
          @click="switchPage"
        >
          Add New Budget
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useRender from "../composables/useRenderData";
export default {
  setup() {
    const router = useRouter();
    const { dataRef } = useRender("budget");
    const datas = dataRef.value;
    function switchPage() {
      router.push({ name: "ADD BUDGET", params: {} });
    }
    function onDelete(id) {
      router.push({ name: "DeleteBudget", params: { idBudget: id } });
    }
    return { switchPage, datas, onDelete };
  },
};
</script>

