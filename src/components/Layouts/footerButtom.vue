<template>
  <footer
    class="w-[100%] min-h-[10vh] bg-black text-white/80 px-[160px] pt-[48px] pb-[48px] mt-[176px]"
  >
    <div class="flex items-start justify-between">
      <div class="w-fit relative">
        <img
          class="w-[32px] h-[32px]"
          src="../../assets/images/footer/logo.svg"
          alt="DevOptima"
        />
        <h4
          class="font-aeonik font-[400] text-[24px]/[27px] absolute left-[25px] top-[10px]"
        >
          DevOptima
        </h4>
      </div>
      <div class="ml-auto flex items-start gap-x-[176px]">
        <ul class="font-inter font-[400] text-[16px]/[24px] text-gray_200">
          <li class="mb-[18px] [500] text-white">Resources</li>
          <li>Release notes</li>
          <li>Docs</li>
          <li>Security</li>
        </ul>
        <ul class="font-inter font-[400] text-[16px]/[24px] text-gray_200">
          <li class="mb-[18px] font-[500] text-white">Community</li>
          <li class="flex gap-x-2 items-center">
            <img
              class="w-[16px] h-[13px]"
              src="../../assets/images/footer/twitter.svg"
            />
            Twitter
          </li>
          <li class="flex gap-x-2 items-center">
            <img
              class="w-[16px] h-[16px]"
              src="../../assets/images/footer/linkedIn.svg"
            />
            LinkedIn
          </li>
          <li class="flex gap-x-2 items-center">
            <img
              class="w-[16px] h-[16px]"
              src="../../assets/images/footer/github.svg"
            />
            GitHub
          </li>
          <li class="flex gap-x-2 items-center">
            <img
              class="w-[16px] h-[16px]"
              src="../../assets/images/footer/discourse.svg"
            />
            Discourse
          </li>
        </ul>
        <ul class="font-inter font-[400] text-[16px]/[24px] text-gray_200">
          <li class="mb-[18px] font-[500] text-white">Legal</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
        </ul>
      </div>
    </div>
    <div
      class="font-inter font-[300] text-[14px]/[21px] text-gray_200 flex items-center justify-between"
    >
      <span> Devoptima 2023 © All rights reserved </span>
      <span>Верстка 2024. © by Gleb Torgashin </span>
    </div>
  </footer>
</template>
