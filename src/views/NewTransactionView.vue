<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <form @submit.prevent="onSubmit">
        <!-- Button Return  -->
        <div class="return">
          <button type="button" @click="returnPage">Return</button>
        </div>
        <!-- Start: Main Form  -->
        <div class="row mt-8">
          <div class="bg-white rounded-lg py-4">
            <div class="container mx-auto px-8">
              <div class="row">
                <label for="total" class="flex items-end">
                  <div class="w-10 text-right leading-10 mr-4 pb-1">
                    <span
                      class="inline-block px-1 text-dark border border-dark rounded text-sm"
                      >USD</span
                    >
                  </div>
                  <div class="flex flex-col border-b border-gray-100 pb-1">
                    <span class="font-semibold text-xs text-dark">Total</span>
                    <input
                      v-model="total"
                      id="total"
                      class="text-4xl text-dark w-full outline-none pb-1"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                </label>
                <label for="catetogy" class="flex items-center">
                  <div
                    class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                  >
                    <span
                      class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                    ></span>
                  </div>
                  <div class="flex border-b border-gray-100 py-3">
                    <input
                      v-model="category"
                      id="catetogy"
                      class="text-xl text-dark w-full outline-none pb-1"
                      type="text"
                      placeholder="Select a category"
                    />
                  </div>
                </label>
                <label for="note" class="flex items-center">
                  <div
                    class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                  >
                    <span class="w-8">
                      <i class="t2ico t2ico-document text-2xl"></i
                    ></span>
                  </div>
                  <div class="flex border-b border-gray-100 py-3">
                    <input
                      v-model="note"
                      id="note"
                      class="text-dark w-full outline-none pb-1"
                      type="text"
                      placeholder="Note"
                    />
                  </div>
                </label>
                <label for="time" class="flex items-center">
                  <div class="flex flex-none mr-6">
                    <span class="w-8 flex items-center justify-end text-dark">
                      <i class="t2ico t2ico-calendar text-2xl"></i
                    ></span>
                  </div>
                  <div class="flex-1 py-2 border-b border-gray-100">
                    <div class="text-dark w-full">{{ new Date() }}</div>
                  </div>
                </label>
                <label for="wallet" class="flex items-center">
                  <div class="flex flex-none mr-6">
                    <span class="w-8 flex items-center justify-end text-dark">
                      <i class="t2ico t2ico-wallet text-2xl"></i
                    ></span>
                  </div>
                  <div class="flex-1 py-2">
                    <div class="text-dark w-full">My Wallet</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- Button: More Details  -->
        <div class="row mt-8" v-if="!isMoreDetails">
          <button
            @click="isMoreDetails = true"
            class="bg-white rounded-lg w-full text-primary font-semibold p-3"
          >
            More Details
          </button>
        </div>

        <template v-if="isMoreDetails">
          <!-- Start Advanced Form  -->
          <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
              <div class="container mx-auto px-8">
                <div class="row">
                  <label for="location" class="flex items-center">
                    <div
                      class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                    >
                      <span class="w-8">
                        <i class="t2ico t2ico-location text-2xl"></i
                      ></span>
                    </div>
                    <div class="flex border-b border-gray-100 py-3">
                      <input
                        v-model="location"
                        id="location"
                        class="text-dark w-full outline-none pb-1"
                        type="text"
                        placeholder="Select a Location"
                      />
                    </div>
                  </label>

                  <label for="withPerson" class="flex items-center">
                    <div
                      class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                    >
                      <span class="w-8">
                        <i class="t2ico t2ico-users text-2xl"></i
                      ></span>
                    </div>
                    <div class="flex border-b border-gray-100 py-3">
                      <input
                        v-model="person"
                        id="withPerson"
                        class="text-dark w-full outline-none pb-1"
                        type="text"
                        placeholder="With person"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- Start: Upload photos -->
          <div class="row mt-8">
            <div class="bg-white rounded-lg py-3">
              <div class="container mx-auto px-8">
                <div class="row">
                  <label for="file" class="flex items-center text-primary">
                    <div
                      class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                    >
                      <span class="w-8">
                        <i class="t2ico t2ico-camera text-2xl"></i
                      ></span>
                    </div>
                    <div class="flex border-b border-gray-100">
                      <div class="w-full font-semibold">Upload-Photos</div>
                      <input
                        id="file"
                        type="file"
                        class="w-0 h-0 overflow-hidden"
                        @change="onChangeFile"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="text-rose-500 text-center my-3">{{ errorFile }}</div>
          </div>

          <!-- Button: Hidden  -->
          <div class="row mt-8" v-if="isMoreDetails">
            <button
              @click="isMoreDetails = false"
              class="bg-white rounded-lg w-full text-primary font-semibold p-3"
            >
              Hidden
            </button>
          </div>
        </template>
        <button
          type="submit"
          class="bg-primary rounded-lg w-full text-white font-semibold p-3 my-4"
        >
          Add Transaction
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUser } from "../composables/useUser";
import { useRouter } from "vue-router";
import useCollection from "../composables/useCollection";
import useStorage from "../composables/useStorage";
export default {
  setup() {
    const isMoreDetails = ref(false);
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const location = ref(null);
    const person = ref("");
    const errorFile = ref(null);
    const { getUser } = useUser();
    const { addRecord, error } = useCollection("transaction");
    const { uploadFile, url } = useStorage("transaction");
    const router = useRouter();
    function onChangeFile(e) {
      const selected = e.target.files[0];

      if (selected) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select file type png and jpg";
      }
    }
    async function onSubmit() {
      if (file.value) await uploadFile(file.value);

      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);
      if (!error.value) router.push({ name: "Home", params: {} });
    }

    function returnPage() {
      router.go(-1);
    }
    return {
      onSubmit,
      isMoreDetails,
      total,
      category,
      onChangeFile,
      errorFile,
      note,
      time,
      location,
      person,
      error,
      returnPage,
    };
  },
};
</script>


