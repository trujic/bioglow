<script setup>
import backImg from "~/assets/images/back.jpg";
import flower from "~/assets/images/flower-2.png";
</script>
<template>
  <div class="bg-[#ECE9E1] py-10 md:py-40 relative border-b border-black">
    <div class="container px-12">
      <div class="flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
        <div class="mt-0 mr-0 md:mt-20 md:mr-20">
          <h2
            class="text-[52px] md:text-[86px] font-sloop font-extralight tracking-[-1px] text-center md:text-left capitalize"
          >
            Our <i>story</i>
          </h2>
          <h3
            class="font-helveticaDisplay text-[17px] md:text-[24px] text-center md:text-left mb-[-4px] uppercase font-light tracking-[1px]"
          >
            ( Behind the brand )
          </h3>
          <div
            class="max-w-[500px] mt-12 font-helveticaDisplay font-light text-[17px] md:text-base"
          >
            <p>
              BIOGLOW was born from a friendship, shaped by years of experience
              in luxury spas and wellness spaces across the world. What started
              between treatments, sea breezes, and quiet cups of coffee became a
              shared vision: to create a space where women can feel completely
              supported — not just treated, but truly seen. We combine the
              precision of science with the warmth of care. Each treatment is
              intentionally crafted to work in harmony with your body’s natural
              rhythm, using proven techniques and top-tier products. But beyond
              the ingredients and methods, what sets us apart is the atmosphere
              — calm, one-on-one, and devoted entirely to you. This is not just
              skincare. It’s a return to yourself. If that resonates with you,
              we’d love to welcome you to our space in the heart of Niš. We work
              by appointment only, and reservations are kindly requested at
              least one week in advance.
            </p>
          </div>
        </div>
        <div class="relative">
          <img
            :src="backImg"
            alt="human body back"
            class="hidden md:block max-w-full h-[250px] md:h-fit m-auto md:max-w-[500px] contrast-[.70]"
          />
          <img
            :src="flower"
            alt="human body back"
            class="md:hidden max-w-full h-[250px] md:h-fit m-auto md:max-w-[500px] contrast-[.70]"
          />
          <h3
            class="welcome font-signature text-[40px] md:text-[70px] font-regular absolute bottom-[25px] md:bottom-[50px] right-[0] md:right-[-120px] leading-[30px] md:leading-[70px]"
            style="
              text-shadow: -0.5px -0.5px 0 #2a2b30, 0.5px -0.5px 0 #2a2b30,
                -0.5px 0.5px 0 #2a2b30, 0.5px 0.5px 0 #2a2b30;
            "
          >
            Nourish your skin, <br />feed your soul
          </h3>
        </div>
      </div>
      <NuxtImg
        src="/face-closeup.png"
        format="webp"
        width="270"
        height="270"
        alt="face closeup with a herb near the eye"
        class="hidden md:block w-[270px] h-[270px] object-cover absolute top-[-80px] left-[20%]"
      />
    </div>
  </div>
</template>
<style lang="css" scoped>
.welcome {
  transform: rotate(-12deg);
  letter-spacing: -1.2px;
}
</style>
