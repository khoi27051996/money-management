<template>
  <header id="header" class="py-8 fixed w-full top-0 left-0 z-10 bg-white">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 rounded-full overflow-hidden"
          >
            <img
              src="https://antimatter.vn/wp-content/uploads/2022/06/anh-ok.jpg"
              class="w-full h-auto object-cover"
              alt="..."
              size="sm"
            />
          </div>
          <h1 class="text-xl font-bold ml-2">
            {{ meta.text }}
          </h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useUser } from "../composables/useUser";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const { getUser } = useUser();
    const { user } = getUser();
    return {
      meta: computed(() => route.meta),
      user,
    };
  },
};
</script>

