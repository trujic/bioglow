<script setup>
import logo from "~/assets/images/logo.png";
/* import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
}); */
</script>

<template>
  <div>
    <header
      class="z-10 top-0 left-0 w-full px-4 md:px-16 flex justify-between items-center bg-[#D4CEBC] py-4 md:py-2"
    >
      <img :src="logo" alt="Logo" class="hidden md:block w-14" />
      <nav
        class="flex gap-10 text-[#2A2B30] uppercase text-[12px] font-regular font-helveticaDisplay tracking-[2px] w-full md:w-fit justify-between md:justify-auto"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>
  </div>
</template>
