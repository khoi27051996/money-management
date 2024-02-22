<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="" data-circle>
      <div>
        <router-link to="/transaction">
          <i class="t2ico t2ico-plus text-2xl"></i>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_ITEM_BOTTOM } from "../constant";
export default {
  setup() {
    const navItems = reactive(NAV_ITEM_BOTTOM);

    return { navItems };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle] {
  @apply absolute w-[60px] h-[30px];
  @apply bg-dark-light;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer > div[data-circle] > div {
  @apply absolute flex items-center rounded-full justify-center text-white;
  @apply w-12 h-12 bg-primary cursor-pointer;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
