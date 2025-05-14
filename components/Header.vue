<script setup>
import logo from "~/assets/images/logo.png";
import flower from "~/assets/images/flower.jpg";
import video from "~/assets/images/video.mp4";
const isActive = ref(false);
</script>

<template>
  <div>
    <header
      class="hidden md:flex justify-between items-center z-10 top-0 left-0 w-full px-4 md:px-16 bg-[#D4CEBC] py-4 md:py-2"
    >
      <NuxtLink to="/">
        <img :src="logo" alt="Logo" class="hidden md:block w-14" />
      </NuxtLink>
      <nav
        class="flex gap-10 text-[#2A2B30] uppercase text-[12px] font-regular font-helveticaDisplay tracking-[2px] w-full md:w-fit justify-between md:justify-auto"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>
    <header class="block md:hidden bg-[#D4CEBC] fixed z-20 w-full">
      <div
        v-if="!isActive"
        class="w-full bg-[#2A2B30] text-white text-center font-helveticaDisplay text-[10px] py-1 uppercase"
      >
        <NuxtLink to="/contact">Book your appointment</NuxtLink>
      </div>
      <div class="relative flex items-center justify-between w-full py-2">
        <NuxtLink
          to="/"
          class="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          <img v-if="!isActive" :src="logo" alt="logo" class="w-10" />
        </NuxtLink>
        <div class="w-12"></div>

        <Icon
          v-if="!isActive"
          @click="isActive = true"
          name="ph:equals-thin"
          width="96"
          height="96"
          style="color: #000; font-size: 30px; font-weight: 200"
          class="mr-2"
        />
        <Icon
          v-if="isActive"
          @click="isActive = false"
          name="iconamoon:close-thin"
          width="96"
          height="96"
          style="color: #000; font-size: 30px; font-weight: 200"
          class="mr-2"
        />
      </div>
      <div v-if="isActive">
        <nav
          class="absolute bg-[#D4CEBC] w-full h-[100vh] text-[#2A2B30] uppercase text-[12px] font-regular font-helveticaDisplay tracking-[2px] justify-between"
        >
          <video
            :src="video"
            autoplay
            muted
            loop
            playsinline
            class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          ></video>

          <img
            :src="flower"
            alt="image of an flower"
            class="w-32 m-auto mb-8"
          />
          <div class="flex flex-col m-auto text-center gap-10">
            <span class="uppercase font-helveticaDisplay">( Welcome )</span>
            <NuxtLink @click="isActive = !isActive" to="/">Home</NuxtLink>
            <NuxtLink @click="isActive = !isActive" to="/">About</NuxtLink>
            <NuxtLink @click="isActive = !isActive" to="/services"
              >Services</NuxtLink
            >
            <NuxtLink @click="isActive = !isActive" to="/contact"
              >Contact</NuxtLink
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
