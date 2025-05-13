<script setup>
import faceCloseup from "~/assets/images/face-closeup.png";
import backImg from "~/assets/images/back.jpg";
</script>
<template>
  <div class="bg-[#ECE9E1] py-10 md:py-40 relative border-b border-black">
    <div class="container">
      <div class="flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
        <div class="mt-0 mr-0 md:mt-20 md:mr-20">
          <h2
            class="text-[24px] md:text-[86px] font-serifDisplay font-extralight tracking-[-1px] md:tracking-[-8px] text-center"
          >
            About <i>us</i>
          </h2>
          <div
            class="max-w-[500px] mt-6 md:mt-12 font-helveticaDisplay font-light leading-[18px] text-xs md:text-base"
          >
            <p>
              At Bioglow we are passionate about blending science with
              relaxation. Our treatments are thoroughly designed to align with
              your body's natural biology offering a holisting approach to
              skincare and wellness. We use products from renowned brands
              elevating each experience with a sense of serenity inspired by the
              worlds finest spa.
            </p>
            <p class="mt-5">
              If this sounds like the place for you, we'd love to welcome you to
              our salon in the heart of Nis. We operate by appointment only and
              reservations are required at least one week in advance.
            </p>
          </div>
        </div>
        <div class="relative">
          <img
            :src="backImg"
            alt="human body back"
            class="max-w-full md:max-w-[500px] contrast-[.80]"
          />
          <h3
            class="welcome font-signature text-[70px] font-regular absolute bottom-[50px] right-[0] md:right-[-120px] leading-[70px]"
            style="
              text-shadow: -0.5px -0.5px 0 #2a2b30, 0.5px -0.5px 0 #2a2b30,
                -0.5px 0.5px 0 #2a2b30, 0.5px 0.5px 0 #2a2b30;
            "
          >
            Nourish your skin, <br />feed your soul
          </h3>
        </div>
      </div>
      <img
        :src="faceCloseup"
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
