<script setup>
import logo from "~/assets/images/logo-with-border.png";
import flower from "~/assets/images/flower.jpg";
const isActive = ref(false);
</script>

<template>
  <div>
    <div class="fixed z-20 w-full border-b border-black">
      <div
        v-if="!isActive"
        class="w-full bg-[#D4CEBC] text-black text-center font-helveticaDisplay text-[10px] py-1 uppercase"
      >
        <NuxtLink to="/contact">Book your appointment</NuxtLink>
      </div>
      <header
        class="hidden md:flex justify-between items-center z-10 top-0 left-0 w-full px-4 md:px-16 bg-[#ECE9E1] py-4 md:py-2"
      >
        <NuxtLink to="/">
          <img :src="logo" alt="Logo" class="hidden md:block w-14" />
        </NuxtLink>
        <nav
          class="flex gap-10 text-[#2A2B30] uppercase text-[12px] font-regular font-helveticaDisplay tracking-[2px] w-full md:w-fit justify-between md:justify-auto"
        >
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/education">Education</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </header>
    </div>
    <header class="block md:hidden bg-[#ECE9E1] fixed z-20 w-full">
      <div
        v-if="!isActive"
        class="w-full bg-[#D4CEBC] text-black text-center font-helveticaDisplay text-[10px] py-1 uppercase"
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
        <div class="uppercase container text-[12px]" v-if="isActive">menu</div>
        <div></div>
        <Icon
          v-if="!isActive"
          @click="isActive = true"
          name="ph:equals-thin"
          width="96"
          height="96"
          style="color: #000; font-size: 30px; font-weight: 200"
          class="mr-[2rem]"
        />
        <Icon
          v-if="isActive"
          @click="isActive = false"
          name="iconamoon:close-thin"
          width="96"
          height="96"
          style="color: #000; font-size: 30px; font-weight: 200"
          class="mr-[2rem]"
        />
      </div>
      <div v-if="isActive">
        <nav
          class="absolute w-full h-[100vh] text-[#2A2B30] uppercase text-[12px] font-regular font-helveticaDisplay tracking-[2px] justify-between z-10"
        >
          <div
            class="flex flex-col m-auto text-start gap-10 bg-[#ECE9E1] container"
          >
            <div
              class="font-sloop flex flex-col justify-center mt-[-46px] normal-case text-[42px] h-screen items-start text-start max-w-[200px] m-auto"
            >
              <div class="flex">
                <div
                  class="font-helveticaNow text-[10px] mr-2 font-semibold pt-3"
                >
                  01.
                </div>
                <NuxtLink @click="isActive = !isActive" to="/"> home</NuxtLink>
              </div>
              <div class="flex">
                <div
                  class="font-helveticaNow text-[10px] mr-2 font-semibold pt-3"
                >
                  02.
                </div>
                <NuxtLink @click="isActive = !isActive" to="/about"
                  >about</NuxtLink
                >
              </div>
              <div class="flex">
                <div
                  class="font-helveticaNow text-[10px] mr-2 font-semibold pt-3"
                >
                  03.
                </div>
                <NuxtLink @click="isActive = !isActive" to="/services"
                  >services</NuxtLink
                >
              </div>
              <div class="flex">
                <div
                  class="font-helveticaNow text-[10px] mr-2 font-semibold pt-3"
                >
                  04.
                </div>
                <NuxtLink @click="isActive = !isActive" to="/education"
                  >education</NuxtLink
                >
              </div>
              <div class="flex">
                <div
                  class="font-helveticaNow text-[10px] mr-2 font-semibold pt-3"
                >
                  05.
                </div>
                <NuxtLink @click="isActive = !isActive" to="/contact"
                  >contact</NuxtLink
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
