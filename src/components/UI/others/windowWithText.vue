<script setup lang="ts">
import tipWindow from "../Tooltip/tipWindow.vue";
</script>
<template>
  <div
    class="w-[100%] border border-secondary_blue/40 rounded-xl shadow-black shadow-2xl flex flex-col bg-gradient-to-tr from-[15%] from-slate-950 to-[160%] to-secondary_blue/60"
  >
    <header
      class="w-[100%] min-h-[24px] p-4 flex items-center gap-x-[10px] border-b border-secondary_blue/40"
    >
      <div class="w-[8px] h-[8px] rounded-full bg-blue_500/40"></div>
      <div class="w-[8px] h-[8px] rounded-full bg-blue_500/40"></div>
      <div class="w-[8px] h-[8px] rounded-full bg-blue_500/40"></div>
    </header>
    <main
      class="w-[100%] flex-auto pt-6 text-white/40 font-[400] text-[15px]/[22px] relative"
    >
      <pre
        class="text-transparent bg-clip-text bg-gradient-to-r from-[-2%] from-transparent via-primary_orange/70 to-[85%] to-transparent"
      >
  10  <code class="text-primary_pink/60">let</code> originalRescheduledBooking: BookingType = null 
  11  <code class="text-primary_pink/60">if</code> (rescheduleUid)  
  12  bookingSeat = <code class="text-primary_pink/60">await</code> prisma.bookingSeat.findUntit
  13  where: { 
  14    referenceUid: rescheduleUid,
  15  }, 
  16  include: { 
  17    booking: <code class="text-primary_pink/60">true</code>,
  18    attendee: <code class="text-primary_pink/60">true</code>, 
  19  },
    </pre>
    </main>
    <div class="absolute left-[65%] top-[65px] z-50">
      <tipWindow msg="HenriSal" orientation="lb"></tipWindow>
    </div>
    <div class="absolute left-[45%] bottom-[15px] z-50">
      <tipWindow msg="CarinaWolli" orientation="lt"></tipWindow>
    </div>
  </div>
</template>
