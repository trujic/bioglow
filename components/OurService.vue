<template>
  <div class="bg-[#D4CEBC] flex border-b border-black">
    <div
      class="hidden md:block vertical-text text-reverse border-l border-black uppercase px-28 text-[18px] font-light tracking-[3px]"
    >
      Our Services
    </div>
    <div
      class="py-10 md:py-40 px-4 md:px-0 flex flex-col font-serifDisplay text-[13px] md:text-[40px] font-extralight text-center md:text-left m-auto"
    >
      <span class="border-b border-black"
        >01 / &nbsp professional
        <NuxtLink to="/services" class="hover:text-[#ECE9E1]">
          <span class="font-sloop text-[32px] md:text-[70px] px-4">facial</span>
        </NuxtLink>
        treatments</span
      >
      <span class="border-b border-black"
        >02 / &nbsp skincare
        <NuxtLink to="/services" class="hover:text-[#ECE9E1]">
          <span class="font-sloop text-[32px] md:text-[70px] px-4"
            >screening</span
          >
        </NuxtLink>
        <sup class="text-[10px] md:text-[16px] align-super"
          ><i>( coming soon )</i></sup
        ></span
      >
      <span class="border-b border-black"
        >03 /
        <NuxtLink to="/services" class="hover:text-[#ECE9E1]"
          ><span class="font-sloop text-[32px] md:text-[70px] px-4"
            >body</span
          ></NuxtLink
        >
        treatments & massages
        <sup class="text-[10px] md:text-[16px] align-super"
          ><i>( coming soon )</i></sup
        ></span
      >
      <span
        >04 /
        <NuxtLink to="/services" class="hover:text-[#ECE9E1]"
          ><span class="font-sloop text-[32px] md:text-[70px] px-4"
            >pain</span
          ></NuxtLink
        >
        management
        <sup class="text-[10px] md:text-[16px] align-super"
          ><i>( coming soon )</i></sup
        ></span
      >
    </div>
    <div
      class="hidden md:block vertical-text border-l border-black uppercase px-32 text-[18px] font-light tracking-[3px]"
    >
      Our Services
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
