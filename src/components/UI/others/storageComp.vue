<script setup lang="ts">
import roundItem from './roundItem.vue';
import storageInputBtn from './storageInputBtn.vue';
import storageRecentActivites from './storageRecentActivites.vue';
import zaglushkaForm from './zaglushkaForm.vue';
</script>

<template>
<div class="max-w-[100%] h-[650px] border border-secondary_blue border-l-transparent border-b-transparent/5 rounded-e-2xl overflow-hidden relative">
    <div class="border border-t-transparent border-l-transparent border-r-transparent border-secondary_blue border-b w-[100%] h-[44px]"></div>
    <storageInputBtn></storageInputBtn>
<div
    class="w-[406px] h-[302px] ml-auto mr-5 mt-6 flex flex-col items-center justify-evenly border border-1 border-secondary_blue/90 rounded-lg relative"
  >
    <div class="px-[32px] flex items-center gap-x-[45px] justify-evenly">
      <roundItem
        title1="Row reads"
        title2="50 billion"
        title3="of 100 billion"
        :rot="0.5"
      ></roundItem>
      <roundItem
        title1="Row writes"
        title2="16.1 billion"
        title3="of 50 billion"
        :rot="0.25"
      ></roundItem>
      <roundItem
        title1="Storage"
        title2="7.5 GB"
        title3="of 10 GB"
        :rot="0.75"
      ></roundItem>
    </div>
    <div class="w-[100%] border-t border-secondary_blue pt-4">
      <p class="font-inter font-[400] px-4 py-2 text-[14px]/[14px] text-white/90">
        <span 
          >Usage as of 1 hour ago</span
        >
        <span class="text-white/40 ml-2"
          >(updated hourly)</span
        >
        <p class="px-4 text-white/90">
          <span>Monthly usage resets in 5 days.</span>
          <span class="text-secondary_blue ml-2">Manage plan</span>
        </p>
      </p>
    </div>
    <div
      class="w-[100%] h-[100%] bg-gradient-to-bl from-20% from-primary_blue/30 to-80% to-black/85 mix-blend-screen absolute left-0 top-0"
    ></div>
</div>
<div class="w-[420px] ml-auto">
    <storageRecentActivites></storageRecentActivites>
</div>
<div class="w-[420px] ml-auto mt-5">
    <zaglushkaForm></zaglushkaForm>
</div>
<div class="w-[100%] h-[100%] absolute left-0 top-0 mix-blend-multiply bg-gradient-to-r from-black/80 from-12.5% to-88.5%"></div>
</div>
</template>