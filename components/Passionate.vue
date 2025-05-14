<script setup>
import quality from "~/assets/images/quality.png";
import relaxation from "~/assets/images/relaxation.png";
import holism from "~/assets/images/holism.png";
import science from "~/assets/images/science.png";
import serenity from "~/assets/images/serenity.png";
const content = [
  {
    icon: science,
    text: "science",
  },
  {
    icon: relaxation,
    text: "relaxation",
  },
  {
    icon: holism,
    text: "holism",
  },
  {
    icon: quality,
    text: "quality",
  },
  {
    icon: serenity,
    text: "serenity",
  },
];
</script>

<template>
  <div class="bg-[#ECE9E1] py-10 md:py-20 border-b border-black">
    <div class="container px-4 md:px-60">
      <h3
        class="text-center font-sloop text-[42px] md:text-[70px] font-extralight tracking-[-1px] md:tracking-[1px]"
      >
        At Bioglow
      </h3>
      <h4
        class="font-helveticaDisplay uppercase text-center font-light tracking-[1px] text-[12px] md:text-base"
      >
        ( we are passionate about )
      </h4>
      <div
        class="grid grid-cols-3 md:flex md:flex-row gap-4 md:gap-0 justify-between items-center mt-10 md:mt-14"
      >
        <div v-for="item in content" :key="item.index">
          <div class="flex flex-col gap-2 md:gap-4 items-center">
            <img :src="item.icon" class="w-[30px] md:w-[60px]" />
            <span
              class="font-helveticaDisplay uppercase text-[10px] md:text-[14px] tracking-[1px]"
              >{{ item.text }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
