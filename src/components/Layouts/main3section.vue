<script setup lang="ts">
import btnFirst from "../UI/Buttons/btnFirst.vue";
import btnSecond from "../UI/Buttons/btnSecond.vue";
</script>

<template>
  <section class="max-w-[1280px] mx-auto mt-[246px]">
    <div class="w-[70%] mx-auto flex flex-col items-center justify-center">
      <h2
        class="font-aeonik font-[400] text-[48px]/[54px] tracking-[-0.01em] text-transparent bg-clip-text bg-gradient-to-r from-gradient1/90 from-[-10%] via-white to-[110%] to-gradient1/90"
      >
        Ready to elevate your DevOps strategy?
      </h2>

      <p
        class="font-inter text-[20px]/[30px] tracking-[-0.02em] text-gray_200 text-center mt-5"
      >
        Join the multitude of companies benefiting from optimized DevOps
        practices. Contact us to discover how DevOptima can help your business.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-[18px]">
        <btnSecond title="Contact us"></btnSecond>
        <btnFirst title="Try for free"></btnFirst>
      </div>
    </div>
  </section>
</template>
<!-- 
background: linear-gradient(90deg, rgba(109, 156, 246, 0.7) -8.51%, rgba(195,
214, 251, 0.876516) 10.33%, #FFFFFF 51.91%, rgba(208, 223, 252, 0.90333) 87.66%,
rgba(109, 156, 246, 0.7) 109.79%); -->
