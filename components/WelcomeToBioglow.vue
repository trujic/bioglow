<script setup>
useHead({
  link: [
    {
      rel: "preload",
      as: "video",
      href: "/videos/video.webm",
      type: "video/webm",
    },
  ],
});
import primaryLogo from "~/assets/images/Bioglow-logo.png";
</script>
<template>
  <div
    class="border-b border-black py-4 md:py-20 relative w-full h-screen overflow-hidden"
  >
    <video
      src="/videos/video.webm"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="w-full h-[100vh] object-cover z-[-1] fixed brightness-90"
    ></video>
    <div class="py-20">
      <h2
        class="font-sloop text-center mb-8 md:mb-0 text-[40px] md:text-[70px] text-white"
      >
        Welcome to
      </h2>
      <img
        :src="primaryLogo"
        alt="primary logo"
        class="max-w-[300px] md:max-w-[450px] w-full m-auto"
      />
      <h5
        class="uppercase font-helveticaDisplay text-white w-fit m-auto mb-20 text-[12px] text-center md: text-auto md:text-[18px] font-light tracking-[3px] px-[40px] md:px-[0px]"
      >
        ( welcome to your natural radiance oasis )
      </h5>
      <nuxt-link to="/contact">
        <NuxtImg
          src="/envelope.png"
          format="webp"
          alt="primary logo"
          class="max-w-[600px] w-full m-auto"
        />
      </nuxt-link>
    </div>
  </div>
</template>
