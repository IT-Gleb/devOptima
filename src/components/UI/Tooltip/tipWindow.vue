<script setup lang="ts">
const props = withDefaults(
  defineProps<{ msg?: string; orientation?: string }>(),
  { msg: "hello", orientation: "lb" }
);
</script>

<template>
  <div class="min-w-[95px] h-[45px] relative">
    <div
      class="min-w-[74px] h-[27px] absolute px-[10px] py-[7px] rounded-e-[40px] shadow-md shadow-black_optima bg-bg_tooltip text-[13px]/[13px] text-black_optima font-inter font-[600]"
      :class="
        props.orientation === 'lb'
          ? 'left-0 top-0 rounded-tl-[12px] rounded-bl-[2px]'
          : props.orientation === 'lt'
          ? 'right-0 bottom-0 rounded-bl-[12px] rounded-tl-[2px]'
          : ''
      "
    >
      {{ props.msg }}
    </div>
    <div
      class="absolute w-[16px] h-[16px]"
      :class="
        props.orientation === 'lb'
          ? 'left-[-14px] bottom-[4px]'
          : props.orientation === 'lt'
          ? 'left-[-12px] top-[4px] rotate-90'
          : ''
      "
    >
      <img
        class="w-[100%] h-[100%] block"
        src="../../../assets/images/main/cursor-1.svg"
        alt="cursor"
        loading="lazy"
      />
    </div>
  </div>
</template>
