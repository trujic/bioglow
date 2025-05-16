<script setup>
import logo from "~/assets/images/bio-glow-logo.png";
</script>
<template>
  <div class="relative h-[60vh]">
    <video
      src="/videos/about-us-video.mp4"
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full h-[60vh] md:h-[100vh] object-cover z-[-1]"
      loading="lazy"
    ></video>
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <img :src="logo" alt="white logo" class="w-56" />
    </div>
  </div>
</template>
