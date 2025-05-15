<script setup>
import bgImage from "~/assets/images/services-bg.png";
</script>
<template>
  <section
    class="relative w-full h-[40vh] md:h-[75vh] overflow-hidden text-white"
    :style="`
      background-image: url(${bgImage});
      background-size: cover;
      background-position: center;
    `"
  >
    <div class="absolute inset-0 bg-[#ECE9E1]/50 z-0"></div>

    <!-- Fixed Text Content Centered -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-center px-8 z-10 text-black mt-10 md:mt-20"
    >
      <h3
        class="font-sloop text-[28px] md:text-[64px] font-extralight max-w-fit tracking-[-1px] leading-[1.2]"
      >
        It's time to enter your glow era
      </h3>
      <p
        class="mt-2 md:mt-4 max-w-[440px] text-[10px] md:text-lg font-extralight font-helveticaDisplay px-16 md:px-0"
      >
        This isn’t just about outer beauty, it’s about embracing a new state of
        being. A time where radiance begins from within and shines effortlessly
        on the outside.
      </p>
    </div>
  </section>
</template>
