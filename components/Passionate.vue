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
        class="text-center font-serifDisplay text-[24px] md:text-[46px] font-extralight tracking-[-1px] md:tracking-[-3px]"
      >
        At Bioglow we are <i>passionate</i> about:
      </h3>
      <div
        class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mt-6 md:mt-14"
      >
        <div v-for="item in content" :key="item.index">
          <div class="flex flex-col gap-2 md:gap-4 items-center">
            <img :src="item.icon" class="w-[30px] md:w-[60px]" />
            <!-- <Icon :name="item.icon" style="color: black" class="text-[4em]" /> -->
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
