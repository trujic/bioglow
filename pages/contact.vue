<script setup>
import { onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";

useSeoMeta({
  title: "Contact Us | Bioglow",
  description:
    "Get in touch with Bioglow to book an appointment or ask us anything. We’re here to help you shine.",
  ogTitle: "Contact Us | Bioglow",
  ogDescription:
    "Reach out to Bioglow for bookings, questions, or more information about our natural skincare treatments.",
  ogImage: "https://bioglow.rs/og-image.jpg",
  ogUrl: "https://www.bioglow.rs/contact",
  twitterCard: "summary_large_image",
});

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
      bgImage="/flower-hero.png"
      title="Get in"
      titleMark="touch"
      bgPosition="50% 75%"
    />
    <ContactForm />
    <WhereWeAre />
  </div>
</template>
