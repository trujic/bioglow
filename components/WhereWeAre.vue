<script setup>
import { useRouter } from "vue-router"; // Import useRouter for route info

// Function to handle button click and scroll logic
const handleButtonClick = () => {
  const router = useRouter();
  const currentRoute = router.currentRoute._value.path;

  console.log(currentRoute);
  if (currentRoute === "/contact") {
    window.scrollBy({
      top: -1200, // Scroll 1200px upwards
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <!-- Wrapper is relative to position video absolutely -->
  <div class="relative bg-cover bg-center border-b border-black">
    <!-- Video fills entire wrapper, matching content height -->
    <video
      src="/videos/horses.mp4"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
      loading="lazy"
    ></video>

    <!-- Content with padding determines container height -->
    <div
      class="pt-20 pb-20 md:pb-32 md:pt-32 flex flex-col gap-10 md:gap-24 justify-between container relative z-10"
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
          <span class="text-[12px] md:text-base font-light"
            >Stojana Novakovića 17a, Niš</span
          >
        </div>
        <div class="flex flex-col">
          <span
            class="uppercase font-bold mb-4 md:mb-8 text-[10px] md:text-base"
            >get in touch</span
          >
          <span class="text-[12px] md:text-base font-light">+381692111524</span>
          <span class="text-[12px] md:text-base font-light"
            >info@bioglow.com</span
          >
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
