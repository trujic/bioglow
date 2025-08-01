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
        class="w-full text-left p-4 font-light font-helveticaDisplay uppercase flex justify-between items-start md:items-center"
        @click="toggleItem(index)"
      >
        <div class="flex flex-col md:flex-row text-[12px] md:text-base">
          <span class="text-[14px]">{{ item.title }}</span>
          <span v-if="item.subtitle" class="text-[14px]">{{
            item.subtitle
          }}</span>
        </div>
        <span v-if="item.text">{{
          openIndex === baseIndex + index ? "−" : "+"
        }}</span>
      </button>
      <div
        v-if="item.text"
        v-show="openIndex === baseIndex + index"
        class="p-4 pt-0 text-[14px] md:text-sm text-start text-black font-light"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
