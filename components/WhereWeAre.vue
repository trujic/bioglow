<script setup>
import { useRoute } from "vue-router"; // Import useRoute to detect the current route
import footerBg from "~/assets/images/footer-bg.png";

// Function to handle button click and scroll logic
const handleButtonClick = () => {
  // Get the current route path
  const router = useRouter();

  const currentRoute = router.currentRoute._value.path;

  // If we're on the '/contact' page, scroll 500px up
  if (currentRoute === "/contact") {
    window.scrollBy({
      top: -1200, // Scroll 500px upwards
      behavior: "smooth", // Enable smooth scrolling
    });
  }
};
</script>

<template>
  <div
    class="pt-10 pb-20 md:pt-40 md:pb-40 bg-cover bg-center border-b border-black"
    :style="{
      backgroundImage: `url(${footerBg})`,
      backgroundColor: 'rgba(236, 233, 225, 0.7)',
    }"
  >
    <div
      class="flex flex-col gap-10 md:gap-40 justify-between align-center container"
    >
      <h2
        class="text-[24px] md:text-[64px] md:text-[86px] font-serifDisplay font-extralight max-w-[620px] leading-[90px] tracking-[-1px] md:tracking-[-8px]"
      >
        Experience your <i>glow</i> here.
      </h2>
      <div class="flex gap-20 md:gap-32">
        <div class="flex flex-col">
          <span class="uppercase font-bold mb-4 md:mb-8 text-xs md:text-base"
            >visit us</span
          >
          <span class="text-[12px] md:text-base"
            >Stojana Novakovica 17a, Nis</span
          >
        </div>
        <div class="flex flex-col">
          <span class="uppercase font-bold mb-4 md:mb-8 text-xs md:text-base"
            >get in touch</span
          >
          <span class="text-[12px] md:text-base">+381692111524</span>
          <span class="text-[12px] md:text-base">info@bioglow.com</span>
        </div>
      </div>
      <NuxtLink @click.prevent="handleButtonClick" to="/contact">
        <button
          class="max-w-full w-full md:max-w-fit p-2 px-4 border border-black text-sm md:text-base"
        >
          book appointment ->
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
