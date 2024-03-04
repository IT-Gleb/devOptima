<script setup lang="ts">
const props = withDefaults(defineProps<{ mt?: string }>(), { mt: "mt-8" });
</script>

<template>
  <div
    class="flex flex-col items-start justify-evenly gap-2 text-white/80 font-inter font-[400]"
    :class="props.mt"
  >
    <span>Recent activity</span>
    <div class="flex gap-[10px]">
      <img
        class="w-[36px] h-[36px] rounded-full"
        src="../../../assets/images/main/image_345.png"
        alt="devOptima face"
      />
      <div>k8isdead <span>opened #121</span></div>
    </div>
    <div class="text-white/40">4 hours ago</div>
  </div>
</template>
