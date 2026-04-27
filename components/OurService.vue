<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();
</script>

<template>
  <div class="bg-[#D4CEBC] flex border-b border-black">
    <div
      class="hidden md:block vertical-text text-reverse border-l border-black uppercase px-28 text-[18px] font-light tracking-[3px]"
    >
      {{ $t("Our Services") }}
    </div>
    <div
      class="py-10 md:py-40 px-4 md:px-0 flex flex-col font-serifDisplay text-[13px] md:text-[40px] font-extralight text-center md:text-left m-auto"
    >
      <!-- SERVICE 01 -->
      <span class="text-[17px] border-b border-black">
        <span class="md:text-[20px]">01 </span> &nbsp;
        <template v-if="locale === 'en'">
          professional
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4"
              >facial</span
            >
          </NuxtLink>
          treatments
        </template>
        <template v-else>
          profesionalni
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4"
              >tretmani</span
            >
          </NuxtLink>
          lica
        </template>
      </span>

      <!-- SERVICE 02 -->
      <span class="text-[17px] border-b border-black">
        <span class="md:text-[20px]">02 </span> &nbsp;
        <template v-if="locale === 'en'">
          skincare
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4"
              >screening</span
            >
          </NuxtLink>
        </template>
        <template v-else>
          analiza
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4">kože</span>
          </NuxtLink>
        </template>
      </span>

      <!-- SERVICE 03 -->
      <span class="text-[17px] border-b border-black">
        <span class="md:text-[20px]">03 </span>
        <template v-if="locale === 'en'">
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4">body</span>
          </NuxtLink>
          treatments & massages
        </template>
        <template v-else>
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4"
              >tretmani
            </span>
          </NuxtLink>
          tela & masaže
        </template>
      </span>

      <!-- SERVICE 04 -->
      <span class="text-[17px]">
        <span class="md:text-[20px]">04 </span>
        <template v-if="locale === 'en'">
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4">pain</span>
          </NuxtLink>
          management
        </template>
        <template v-else>
          rešavanje
          <NuxtLink :to="localePath('services')" class="hover:text-[#ECE9E1]">
            <span class="font-sloop text-[32px] md:text-[70px] px-4">bola</span>
          </NuxtLink>
        </template>
      </span>
    </div>
    <div
      class="hidden md:block vertical-text border-l border-black uppercase px-32 text-[18px] font-light tracking-[3px]"
    >
      {{ $t("Our Services") }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.vertical-text {
  writing-mode: vertical-lr;
  text-align: center;
}
.vertical-text.text-reverse {
  writing-mode: vertical-lr;
  text-align: center;
  transform: rotate(180deg);
}
</style>
