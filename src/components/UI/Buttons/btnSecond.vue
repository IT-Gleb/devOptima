<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), { title: "eee" });
</script>

<template>
  <button
    class="min-w-[157px] h-[48px] text-white overflow-hidden px-[36px] pb-6 pt-[16px] align-middle font-inter font-[600] text-[16px]/4 rounded-[40px] bg-primary_blue hover:bg-btn_secondary_blue"
  >
    {{ props.title }}
  </button>
</template>
