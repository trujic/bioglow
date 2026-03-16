<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  items: Array,
  baseIndex: Number,
  openIndex: Number,
});

const emit = defineEmits(["toggle"]);

const toggleItem = (localIndex) => {
  emit("toggle", props.baseIndex + localIndex);
};
</script>

<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="baseIndex + index"
      class="border-b border-black text-sm md:text-base"
    >
      <button
        class="w-full text-left py-4 font-light font-helveticaDisplay uppercase flex justify-between items-start md:items-center"
        @click="toggleItem(index)"
      >
        <div class="flex flex-col md:flex-row text-[12px] md:text-base">
          <span class="text-[14px]">{{ item.title }}</span>
          <span v-if="item.subtitle" class="text-[14px]">{{
            item.subtitle
          }}</span>
        </div>
        <span v-if="item.text" class="text-[20px] leading-none select-none">{{
          openIndex === baseIndex + index ? "−" : "+"
        }}</span>
      </button>
      <div
        v-if="item.text"
        v-show="openIndex === baseIndex + index"
        class="p-4 pt-0 text-[14px] md:text-sm text-start text-black font-light space-y-3"
      >
        <p class="py-6">{{ item.text }}</p>

        <ul v-if="item.list" class="list-disc pl-5 space-y-1">
          <li v-for="(point, i) in item.list" :key="i">
            {{ point }}
          </li>
        </ul>

        <p v-if="item.afterText">
          {{ item.afterText }}
        </p>
      </div>
    </div>
  </div>
</template>
