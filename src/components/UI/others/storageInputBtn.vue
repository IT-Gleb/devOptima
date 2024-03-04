<script setup lang="ts">
const props = withDefaults(defineProps<{ mt?: string }>(), { mt: "mt-7" });
</script>

<template>
  <div
    class="w-fit ml-auto mr-4 flex gap-x-[18px] relative z-10"
    :class="props.mt"
  >
    <span
      class="block relative after:content-['>'] after:block after:text-gray_200/40 after:cursor-pointer after:absolute after:top-[6px] after:right-[2px] after:rotate-90"
    >
      <input
        class="font-inter font-[400] text-[14px]/[14px] placeholder:text-white/20 bg-primary_blue/25 text-white/70 px-4 py-2 border border-secondary_blue rounded-md shadow-lg shadow-black focus:outline-none"
        type="email"
        placeholder="info@devoptima.io"
      />
    </span>
    <button
      class="font-inter font-[500] text-[15px]/[15px] bg-button_blue/40 text-button_blue w-[111px] h-[38px] rounded-sm shadow-lg shadow-black"
    >
      New branch
    </button>
  </div>
</template>
