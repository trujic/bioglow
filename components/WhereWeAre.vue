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
  <div class="pb-20 md:pb-32 bg-cover bg-center border-b border-black">
    <video
      src="/videos/horses.mp4"
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full h-[60vh] md:h-[100vh] object-cover z-[-1]"
    ></video>
    <div
      class="pt-20 md:pt-32 flex flex-col gap-10 md:gap-24 justify-between align-center container"
    >
      <div>
        <h2
          class="text-[28px] md:text-[64px] md:text-[86px] font-serifDisplay font-extralight max-w-[620px] tracking-[-1px] md:tracking-[-8px]"
        >
          Experience your
        </h2>
        <h2
          class="font-serifDisplay font-extralight text-[28px] md:text-[86px] leading-[20px] md:leading-[60px] tracking-[-1px] md:tracking-[-8px]"
        >
          <i>glow</i> here
        </h2>
      </div>
      <div class="flex gap-20 md:gap-32">
        <div class="flex flex-col">
          <span
            class="uppercase font-bold mb-4 md:mb-8 text-[10px] md:text-base"
            >visit us</span
          >
          <span class="text-[12px] md:text-base"
            >Stojana Novakovića 17a, Niš</span
          >
        </div>
        <div class="flex flex-col">
          <span
            class="uppercase font-bold mb-4 md:mb-8 text-[10px] md:text-base"
            >get in touch</span
          >
          <span class="text-[12px] md:text-base">+381692111524</span>
          <span class="text-[12px] md:text-base">info@bioglow.com</span>
        </div>
      </div>
      <NuxtLink @click.prevent="handleButtonClick" to="/contact">
        <button
          class="max-w-full w-full md:max-w-fit p-2 px-4 border border-black text-xs md:text-base uppercase"
        >
          book an appointment
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
