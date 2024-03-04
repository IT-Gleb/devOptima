<script setup lang="ts">
import { ref } from "vue";
// const options = {
//   //   theme: "dark1",
//   backgroundColor: null,
//   animationEnabled: false,
//   legend: false,
//   width: 86,
//   height: 86,
//   title: {
//     text: "",
//   },
//   data: [
//     {
//       type: "doughnut",
//       startAngle: 90,
//       dataPoints: [
//         { label: "", y: 50 },
//         { label: "", y: 50 },
//       ],
//     },
//   ],
//   toolTip: {
//     enabled: false,
//   },
//   //   styleOptions: {
//   //     width: "86px",
//   //     height: "66px",
//   //   },
// };
const props = withDefaults(
  defineProps<{
    title1: string;
    title2: string;
    title3: string;
    rot: number;
  }>(),
  {
    title1: "lalalla",
    title2: "title2",
    title3: "title3",
    rot: 0.5,
  }
);

const classStr = ref<string>("");
switch (props.rot) {
  case 0.25:
    classStr.value =
      "border-l-primary_blue/40 border-b-primary_blue/40 border-r-primary_blue/40 border-t-secondary_blue/80 rotate-45";
    break;
  case 0.5:
    classStr.value =
      "border-l-primary_blue/40 border-b-primary_blue/40 border-t-secondary_blue/80 border-r-secondary_blue/80 rotate-45";
    break;
  case 0.75:
    classStr.value =
      "border-l-primary_blue/40 border-b-secondary_blue/80 border-t-secondary_blue/80 border-r-secondary_blue/80 rotate-45";
    break;
}
</script>

<template>
  <article class="flex flex-col gap-y-1 items-center justify-center">
    <div
      class="w-fit h-fit border-2 rounded-full border-gray_200/30 relative shadow-lg shadow-black/80"
    >
      <div
        class="w-[84px] h-[84px] rounded-full bg-transparent border-[12px]"
        :class="classStr"
      ></div>
      <div
        class="w-[64px] h-[64px] rounded-full bg-transparent border-2 border-gray_200/30 absolute left-[10px] top-[10px]"
      ></div>
    </div>
    <span
      class="font-inter font-[500] text-[15px]/[15px] text-white/90 mt-3 shadow-xl shadow-black/90"
      >{{ props.title1 }}</span
    >
    <span class="font-inter [500] text-[15px]/[15px] text-white/90 mt-[12px]">{{
      props.title2
    }}</span>
    <span
      class="font-inter font-[400] text-[14px]/[14px] text-white/40 mt-[2px]"
      >{{ props.title3 }}</span
    >
  </article>
</template>
