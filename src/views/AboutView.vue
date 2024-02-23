<template>
  <div class="screen">
    <div class="px-8 ml-2 absolute py-20 w-full">
      <h1 class="font-bold my-5">INTRODUCTION :</h1>
      <p class="tracking-widest py-5">
        I created this application for the purpose of managing each individual's
        spending. Looking forward to your support.
        <br />
        Avatar editing function please operate on the computer. I will fix this
        function on the phone as soon as possible. Thank
        <br />
        For more information, please contact via:
      </p>
      <div class="mt-4">
        <div class="">
          <ul>
            <li v-for="contact in contacts" :key="contact.icon" class="mt-2">
              <a :href="contact.text">
                <i :class="contact.icon"></i>
                <span class="text-2xl">{{ contact.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { INFO_CONTACT } from "../constant";
import { reactive } from "vue";
export default {
  setup() {
    const contacts = reactive(INFO_CONTACT);
    return { contacts };
  },
};
</script>
