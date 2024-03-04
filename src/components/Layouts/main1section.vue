<script setup lang="ts">
import inputBtnLeft from "../UI/inputs/inputBtnLeft.vue";
</script>

<template>
  <section class="max-w-[1280px] mx-auto mt-[152px]">
    <div>
      <h2
        class="font-aeonik font-[400] text-[48px]/[54px] text-white w-[60%] mx-auto text-center hyphens-manual tracking-[-0.01em]"
      >
        Innovative solutions<br />for operational excellence
      </h2>
      <p
        class="mt-[20px] text-gray_200 font-inter text-[20px]/[30px] w-[60%] px-10 mx-auto text-center hyphens-manual"
      >
        Tailored DevOps expertise driving your business momentum.<br />
        Personalized solutions for growth and evolution.
      </p>
    </div>
  </section>

  <section class="max-w-[1280px] mx-auto mt-[56px]">
    <div class="flex items-start justify-center gap-x-[40px]">
      <article
        class="w-[380px] h-[460px] border border-secondary_blue rounded-xl p-[16px] pr-0 relative overflow-hidden"
      >
        <div
          class="w-[100%] h-[100%] absolute bg-gradient-to-tr from-12% from-black/70 via-transparent to-88% to-primary_blue/35 left-0 top-0 z-10 mix-blend-myltiply"
        ></div>
        <div
          class="w-[100%] h-[100%] bg-primary_blue/10 pl-[16px] pt-[16px] pr-0 border border-secondary_blue/40 border-r-transparent border-b-transparent rounded-xl flex flex-col gap-y-5"
        >
          <div
            class="bg-primary_blue/5 border border-secondary_blue/65 rounded-lg pl-[24px] pt-[16px] pb-[24px] border-e-transparent border-b-transparent overflow-hidden"
          >
            <div class="flex items-center gap-x-3">
              <img
                class="w-[16px] h-[16px]"
                src="../../assets//images/main/sky.svg"
                alt="Изображение"
              />
              <h6
                class="font-inter font-[500] text-[15px]/[20px] text-gray_100"
              >
                Save a new version
              </h6>
            </div>
            <div
              class="bg-primary_blue/15 pl-[24px] pb-[2px] pt-[2px] mt-[18px]"
            >
              <ul
                class="pb-[10px] pr-0 mt-[23px] text-btn_text_blue text-[14px]/[20px] font-inter"
              >
                <li
                  class="block relative whitespace-nowrap before:content-['✓'] before:text-btn_text_blue before:block before:absolute before:top-0 before:-left-[16px] bg-clip-text text-transparent bg-gradient-to-r from-25% from-btn_text_blue to-95%"
                >
                  Successfully saved Acme Marketing Website v.0.0.1
                </li>
                <li
                  class="block relative whitespace-nowrap before:content-['✓'] before:text-btn_text_blue before:block before:absolute before:top-0 before:-left-[16px] bg-clip-text text-transparent bg-gradient-to-r from-25% from-btn_text_blue to-95%"
                >
                  Pushed updates to CDN cache
                </li>
              </ul>
            </div>
          </div>
          <div
            class="border border-secondary_blue/40 border-b-transparent border-r-transparent"
          >
            <div
              class="font-inter font-[500] text-[15px]/[20px] flex gap-x-2 pl-[24px] pt-[16px] bg-clip-text text-transparent bg-gradient-to-b from-5% from-gray_100 to-[105%]"
            >
              <img
                src="../../assets/images/footer/github.svg"
                alt="github devOps"
              />
              Push to GitHub
            </div>
            <div class="font-inter flex flex-col gap-y-4 mt-[57px] pl-[24px]">
              <h4 class="text-white font-[500] text-[20px]/[25px]">
                Continuous Integration & Deployment
              </h4>
              <p class="font-[300] text-gray_200 text-[16px]/[22px]">
                Streamline your development process with our advanced CI/CD
                solutions, ensuring faster and more reliable code deployment.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article
        class="w-[380px] h-[460px] border border-secondary_blue rounded-xl p-[16px] pr-0 relative overflow-hidden flex flex-col items-start justify-stretch gap-y-[8px] bg-gradient-to-tr from-black/60 from-[-10%] to-[190%] to-primary_blue/65"
      >
        <!-- <div
          class="absolute w-[100%] h-[100%] left-0 top-0 mix-blend-mulyiply bg-gradient-to-t from-12% from-black/70 via-transparent to-88% to-primary_blue/45"
        ></div> -->
        <img
          class="w-fit"
          src="../../assets/images/main/oblako.png"
          alt="Image. DevOps"
          loading="lazy"
        />
        <h4
          class="text-white font-inter font-[500] text-[20px]/[25px] tracking-[-0.02em]"
        >
          Cloud Solutions & Infrastructure Management
        </h4>
        <p class="text-gray_200 font-inter font-[300] text-[16px]/[22px]">
          Leverage the cloud for scalability and efficiency. We provide
          comprehensive cloud infrastructure management and optimization
          services.
        </p>
      </article>
      <article
        class="w-[380px] pt-[16px] pl-[16px] h-[460px] border border-secondary_blue rounded-xl p-[16px] pr-0 relative overflow-hidden flex flex-col items-start justify-stretch gap-y-[12px] bg-gradient-to-tr from-[26%] from-primary_blue/10 to-[150%] to-secondary_blue/80"
      >
        <div
          class="border border-secondary_blue/70 border-r-transparent border-b-transparent rounded-xl p-4 max-h-[55%] overflow-hidden"
        >
          <inputBtnLeft></inputBtnLeft>
          <div
            class="mt-[32px] pb-0 relative overflow-hidden bg-gradient-to-t from-[20%] from-black/20 to-transparent"
          >
            <pre
              class="block text-transparent w-[80%] bg-clip-text bg-gradient-to-r from-gradient1/80 from-[-10%] via-primary_orange via-[20%] to-[70%]"
            >
HTTP 200:{"id":"56dbfa40-a787-4219-a934-167f9e4756fd"}             
HTTP 200:{"id":"f0b41670-9a18-409e-9411-49fc0d60a437"}
HTTP 200:{"id":"cdba2021-8589-4e13-b9a7-16aac8d4ca77"}
HTTP 200:{"id">:"7563d0a1-d5d8-4eb0-ab4f-008df13fae52"} 
HTTP 200:{"id">:"0faec107-f938-4d54-ba57-37349dfa4214"}
<!-- <code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-white">:"56dbfa40-a787-4219-a934-167f9e4756fd"</code> }              
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"f0b41670-9a18-409e-9411-49fc0d60a437"</code>  }
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"cdba2021-8589-4e13-b9a7-16aac8d4ca77"</code>  }
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"7563d0a1-d5d8-4eb0-ab4f-008df13fae52"</code>  } 
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"0faec107-f938-4d54-ba57-37349dfa4214"</code>  } -->
            </pre>
            <!-- <div class="absolute left-0 top-0 w-[60%] h-[100%] innerS"></div> -->
            <!-- <pre>
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-white">:"56dbfa40-a787-4219-a934-167f9e4756fd"</code> }              
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"f0b41670-9a18-409e-9411-49fc0d60a437"</code>  }
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"cdba2021-8589-4e13-b9a7-16aac8d4ca77"</code>  }
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"7563d0a1-d5d8-4eb0-ab4f-008df13fae52"</code>  } 
<code class=" text-secondary_blue">HTTP 200</code><code class=" text-white">:{</code> <code class=" text-primary_orange">"id"</code> <code class="text-gray_100">:"0faec107-f938-4d54-ba57-37349dfa4214"</code>  }
            </pre> -->
          </div>
        </div>
        <h4
          class="text-white font-inter font-[500] text-[20px]/[25px] tracking-[-0.02em] mt-[20px]"
        >
          Automated Testing &<br />
          Quality Assurance
        </h4>
        <p class="text-gray_200 font-inter font-[300] text-[16px]/[22px]">
          Enhance product quality with our automated testing services, designed
          to detect issues early and reduce time-to-market.
        </p>
      </article>
    </div>
  </section>
</template>

<!-- <style scoped>
.innerS {
  box-shadow: inset -75px -70px 55px 8px rgba(49, 68, 114, 0.54);
}
</style> -->
