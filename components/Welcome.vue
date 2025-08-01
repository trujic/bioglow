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
          BIOGLOW was created from years of experience in some of the world’s
          finest hotels and spas — and a shared mission to bring that five-star
          care into a space made just for you We believe beauty begins within.
          That slowing down is powerful. And that skincare is not just a
          routine, but a ritual of balance, health, and self-respect. At
          BIOGLOW, every detail is designed to help you reconnect — with your
          body, your rhythm, and your inner glow.
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
