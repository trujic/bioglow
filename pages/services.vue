<script setup>
useSeoMeta({
  title: "Our Services | Bioglow",
  description:
    "Explore Bioglow’s range of luxurious treatments, including facials, body care, and holistic wellness services.",
  ogTitle: "Our Services | Bioglow",
  ogDescription:
    "Discover Bioglow’s carefully curated skincare and wellness treatments designed to help you glow naturally.",
  ogImage: "https://bioglow.rs/og-image.jpg",
  ogUrl: "https://www.bioglow.rs/services",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <Hero
      bgImage="/hero-small.jpg"
      subtext="( redefining beauty with an elevated glow )"
      bgPosition="50% 55%"
    />
    <ServiceCards />
    <SingleDetailedService />
    <MultiDetailedService />
    <WhereWeAre />
  </div>
</template>
