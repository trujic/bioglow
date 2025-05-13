<script setup>
import flower from "~/assets/images/flower-on-table.jpg";
</script>
<template>
  <div
    class="border-t border-black flex flex-col md:flex-row w-full bg-[#ECE9E1]"
  >
    <div
      class="py-10 md:py-20 px-4 md:px-32 basis-1/2 flex flex-col gap-10 flex-shrink-0"
    >
      <h3
        class="font-serifDisplay text-[24px] md:text-[46px] font-light max-w-[500px] uppercase tracking-[-1px] md:tracking-[-2px] text-center px-10 md:text-left md:px-0"
      >
        It's time to enter your glow era
      </h3>
      <p class="mb-6 max-w-[400px] text-xs md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        dolor corporis suscipit, minus vero aperiam dolores, officiis nihil
        error adipisci tempore consequatur id repellat beatae quis hic rerum
        sed. Alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
        optio aut laborum facilis voluptates iusto, excepturi rerum id aliquid
        earum. Laudantium ut nam, veritatis suscipit quam dignissimos
        necessitatibus eos nesciunt!
      </p>
      <button
        class="border border-black rounded-[25px] py-2 px-6 max-w-fit uppercase text-[12px] font-helveticaDisplay"
      >
        book treatment
      </button>
    </div>
    <img
      :src="flower"
      class="hidden md:block basis-1/2 flex-shrink-0 object-cover max-h-[700px]"
    />
  </div>
</template>
