<script setup lang="ts">
//import { onMounted, ref } from "vue";
import headerTopMenu from "../src/components/Layouts/headerTopMenu.vue";
import footerButtom from "./components/Layouts/footerButtom.vue";
import headerTop from "../src/components/Layouts/headerTop.vue";
import storageComp from "../src/components/UI/others/storageComp.vue";
import whatOptima from "../src/components/UI/others/whatOptima.vue";
import main1section from "./components/Layouts/main1section.vue";
import main2section from "./components/Layouts/main2section.vue";
import main3section from "./components/Layouts/main3section.vue";
//import CryptoJS from "crypto-js";
//import { MD5 } from "../src/lib/index.js";
//const res = ref<string>();

// onMounted(() => {
//   const msg = "Lorem Ipsum is simply dummy text of the printing";
//   res.value = CryptoJS.MD5(msg).toString();
//   console.log(res.value);
//   res.value = MD5(msg);
//   console.log(res.value);
// });
</script>

<template>
  <headerTopMenu></headerTopMenu>
  <main class="max-w-[1920px] mx-auto min-h-[70vh] flex-auto">
    <headerTop></headerTop>
    <section
      class="max-w-[1280px] mx-auto mt-[200px] w-[100%] flex items-start justify-between"
    >
      <storageComp></storageComp>
      <div class="mt-8 w-[50%]">
        <whatOptima></whatOptima>
      </div>
    </section>
    <main1section></main1section>
    <main2section></main2section>
    <main3section></main3section>
  </main>
  <footerButtom></footerButtom>
</template>
