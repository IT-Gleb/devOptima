<script setup lang="ts">
import btnSecond from "../Buttons/btnSecond.vue";
</script>

<template>
  <div
    class="max-w-[454px] h-[56px] bg-primary_blue/30 rounded-3xl border border-secondary_blue outline-none px-[2px] py-[2px] relative overflow-hidden"
  >
    <input
      class="font-inter text-[16px]/5 bg-primary_blue/20 text-gray_200 min-w-[77%] py-4 pl-4 pr-[70px] focus:outline-none focus:border-none rounded-s-3xl"
      type="email"
      placeholder="Your business email..."
    />
    <div class="absolute top-0 right-0 bottom-0 py-1 px-1">
      <btnSecond title="Free trial"></btnSecond>
    </div>
  </div>
</template>
