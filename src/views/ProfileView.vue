<template>
  <div class="screen">
    <section class="absolute py-20 w-full">
      <!-- Start: Info  -->
      <div class="row" v-if="user">
        <div class="container mx-auto">
          <div class="text-center">
            <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img
                v-if="user.photoURL"
                class="w-full h-auto object-cover"
                :src="imageElement || user.photoURL"
                size="xs"
                alt="..."
                id="image-preview"
              />
              <img
                v-else
                class="w-full h-auto object-cover"
                src="https://th.bing.com/th/id/OIP.d2_X3tlwuj45D1-ST-CuCgHaHa?rs=1&pid=ImgDetMain"
                size="xs"
                alt="..."
              />
            </div>
            <div class="change-photo">
              <label for="changePhoto">
                <div class="flex justify-center items-center">
                  <i class="t2ico t2ico-camera text-2xl"></i>
                  <p class="ml-2 text-primary">Edit photo</p>
                </div>
                <input
                  type="file"
                  id="changePhoto"
                  class="w-0 h-0 overflow-hidden"
                  @change="onChange"
                />
              </label>
            </div>
            <div class="font-bold text-primary text-xl">
              {{ user.displayName }}
              <button class="text-red" @click="showModel">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>

            <p class="font-semibold text-gray-400 mt-1">
              {{ user.email }}
            </p>
          </div>
        </div>
      </div>

      <!-- Edit Name  -->
      <div class="editName" v-if="isModelEditName">
        <label for="editName" class="text-xl font-bold">Edit Name : </label>
        <input
          v-model="editName"
          type="text"
          id="editName"
          class="w-full p-2 rounded-lg bg-gray-300"
        />
        <div class="button-edit flex justify-center gap-10 mt-5">
          <button @click="updateName">Edit</button>
          <button @click="showModel">Close</button>
        </div>
      </div>
      <!-- Start: Menu  -->
      <div class="row">
        <div class="container mx-auto px-8">
          <div class="grid grid-cols-1">
            <div class="col-span-1">
              <h3 class="font-bold text-xl text-primary mb-2">General</h3>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="col-span-1">
              <ul>
                <li
                  v-for="profileOption in profileOptions"
                  :key="profileOption.name"
                  class="last:text-red"
                >
                  <router-link
                    class="flex items-center py-2 justify-between"
                    :to="profileOption.route"
                  >
                    <div class="flex text-left items-center">
                      <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                      <h5 class="font-semibold ml-3">
                        {{ profileOption.name }}
                      </h5>
                    </div>
                    <div class="text-right">
                      <i class="t2ico t2ico-arrow-right"></i>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { PROFILE_OPTIONS } from "@/constant";
import { useUser } from "../composables/useUser";
import useStorage from "@/composables/useStorage";
import { useUpdatePhoto, useUpdateName } from "@/composables/useUpdate";
import { sleep } from "../utils/sleep";
export default {
  setup() {
    const isModelEditName = ref(false);
    const editName = ref("");
    const imageElement = ref(null);

    const { getUser } = useUser();
    const { user } = getUser();
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { uploadFile, url, error } = useStorage("avatar");
    async function onChange(e) {
      const selectFile = e.target.files[0];
      await uploadFile(selectFile);
      if (!error.value) {
        imageElement.value = url.value;
        useUpdatePhoto(url.value);
      }
    }

    function showModel() {
      isModelEditName.value = !isModelEditName.value;
    }

    async function updateName() {
      useUpdateName(editName.value);
      await sleep(1000);
      isModelEditName.value = !isModelEditName.value;
    }

    return {
      profileOptions,
      user,
      onChange,
      error,
      isModelEditName,
      showModel,
      editName,
      updateName,
      imageElement,
    };
  },
};
</script>

<style lang="css" scoped>
.editName {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
  width: 250px;
  height: 170px;
  padding: 20px;
  border-radius: 5px;
}
.button-edit button {
  border: 1px solid;
  padding: 8px 10px;
  border-radius: 10px;
}
.button-edit button:nth-child(1),
.button-edit button:nth-child(2):hover {
  border-color: #f28080;
  background-color: white;
  color: #f28080;
}
.button-edit button:nth-child(1):hover,
.button-edit button:nth-child(2) {
  background-color: #f28080;
  color: white;
}
</style>
