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
      subtext="explore our services"
      bgPosition="50% 55%"
    />
    <div class="pt-[400px] md:pt-[600px]">
      <div class="relative bg-[#ECE9E1]">
        <ServiceCards />
        <FadeWrapper>
          <SingleDetailedService />
        </FadeWrapper>
        <FadeWrapper>
          <MultiDetailedService />
        </FadeWrapper>
        <FadeWrapper>
          <WhereWeAre />
        </FadeWrapper>
      </div>
    </div>
  </div>
</template>
