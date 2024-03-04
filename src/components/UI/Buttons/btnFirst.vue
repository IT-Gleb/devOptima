<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), { title: "eee" });
</script>

<template>
  <button
    class="min-w-[157px] h-[48px] text-white overflow-hidden px-[36px] pb-4 pt-[16px] align-middle font-inter font-[600] text-[16px]/4 rounded-[40px] bg-primary_blue/20 border border-1 border-primary_blue hover:border-secondary_blue hover:bg-secondary_blue/50"
  >
    {{ props.title }}
  </button>
</template>
