<script setup>
import heroImg from "~/assets/images/contact-hero.png";
import { onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const scrollToHash = async () => {
  if (route.hash) {
    await nextTick(); // Wait for DOM to update
    const el = document.querySelector(route.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// 1. Run on page load
onMounted(scrollToHash);

// 2. Also run when hash changes (e.g. after route navigation)
watch(
  () => route.hash,
  () => {
    scrollToHash();
  }
);
</script>
<template>
  <div>
    <Hero
      :bgImage="heroImg"
      title="Get in touch"
      height="60vh"
      bgPosition="50% 70%"
    />
    <ContactForm />
    <WhereWeAre />
  </div>
</template>
