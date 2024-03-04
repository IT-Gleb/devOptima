<script setup lang="ts">
import inputEmailBtn from "../UI/inputs/inputEmailBtn.vue";
import zaglushkaWindow from "../UI/others/zaglushkaWindow.vue";
import windowWithText from "../UI/others/windowWithText.vue";
</script>

<template>
  <div class="w-[100%] h-[35vh] cletka absolute -z-10 left-0 top-[80px]"></div>
  <div class="max-w-[77%] mx-auto flex items-center justify-between mt-[88px]">
    <div class="flex flex-col w-[53%]">
      <h1
        class="font-aeonik font-[400] text-[64px]/[71px] text-transparent bg-clip-text bg-gradient-to-r from-[-12%] from-gradient1/90 via-white to-[100%] to-white shadow-xl"
      >
        Revolutionize your DevOps journey with DevOptima
      </h1>

      <p class="font-inter font-[200] text-[20px]/7 text-gray_200 mt-[28px]">
        Empower teams to innovate faster through streamlined development,
        efficient automated workflows, and reliable scaling.
      </p>
      <inputEmailBtn class="mt-4"></inputEmailBtn>
    </div>
    <div class="h-[415px] w-[42%] relative">
      <!-- overflow-hidden -->
      <div class="w-[70%] ml-auto">
        <zaglushkaWindow></zaglushkaWindow>
      </div>
      <div class="w-[480px] absolute left-[5px] top-[22%]">
        <windowWithText></windowWithText>
      </div>
    </div>
  </div>
</template>
