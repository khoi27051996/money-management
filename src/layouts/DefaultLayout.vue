<template>
  <div id="wrapper">
    <navigation-header id="header" />
    <slot />
    <navagation-bottom id="footer" v-if="meta.isShowFooter" />
  </div>
</template>

<script>
import NavagationBottom from "../components/NavagationBottom.vue";
import NavigationHeader from "../components/NavigationHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: {
    NavagationBottom,
    NavigationHeader,
  },
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
