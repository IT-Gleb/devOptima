<script setup lang="ts">
import btnFirst from "../UI/Buttons/btnFirst.vue";
</script>

<template>
  <section class="max-w-[1280px] mx-auto max-h-[80px] overflow-y-hidden py-4">
    <div class="flex items-center justify-between overflow-x-hidden text-white">
      <div class="w-[175px] h-[48px] relative">
        <img
          class="w-[31px] h-[31px]"
          src="/src/assets/images/top/logo.svg"
          alt="devOptima"
        />
        <div
          class="font-aeonik font-bold text-[29px]/8 absolute left-[26px] top-[8px]"
        >
          DevOptima
        </div>
      </div>
      <nav role="navigation" class="w-[345px]">
        <ul
          class="flex items-center justify-between font-inter font-normal text-[16px]/4 tracking-[0.02em]"
        >
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Why DevOptima </a></li>
        </ul>
      </nav>
      <btnFirst title="Get started"></btnFirst>
    </div>
  </section>
</template>
