<script setup></script>
<template>
  <div class="bg-[#ECE9E1] py-20 md:py-40 border-b border-black">
    <div
      class="container px-10 md:px-28 flex flex-col md:flex-row md:justify-between gap-10 md:gap-40 relative"
    >
      <NuxtImg
        src="/about-us-image.png"
        format="webp"
        width="360"
        height="450"
        alt="flowers on the table"
        class="w-[280px] md:w-[360px] h-[380px] md:h-[450px] m-auto"
      />
      <div class="flex-1 pt-0 md:pt-12 max-w-[300px] md:max-w-[570px] m-auto">
        <h3
          class="text-[#2A2B30] text-[22px] md:text-[32px] font-light font-serifDisplay leading-[28px] md:leading-[40px] tracking-[1px] uppercase text-center md:text-left"
        >
          About Bioglow
        </h3>
        <h4
          class="font-sloop text-[28px] md:text-[32px] leading-[20px] mt-4 text-center md:text-left"
        >
          ( serendipitous encounter that <br class="md:hidden" />changed our
          lives )
        </h4>
        <p
          class="text-[#2A2B30] mt-10 font-light font-helveticaDisplay text-[17px] md:text-base max-w-[440px]"
        >
          Bioglow was born from a serendipitous encounter that changed our
          lives. One of us is an international skincare and spa expert with over
          10 years of experience working in the best hotels, resorts, cruise
          ships, while the other is a master biologist specialized in Artificial
          Intelligence solutions for improving health care and diagnostics.
          Together our mission is simple - to help you glow from within.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.welcome {
  transform: rotate(-12deg);
  letter-spacing: -1.2px;
}
</style>
