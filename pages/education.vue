<script setup>
useSeoMeta({
  title: "Educations | Bioglow",
  description:
    "Explore Bioglow’s natural skincare education—learn about clean ingredients, wellness tips, and mindful beauty practices.",
  ogTitle: "Educations | Bioglow",
  ogDescription:
    "Explore Bioglow’s natural skincare education—learn about clean ingredients, wellness tips, and mindful beauty practices.",
  ogImage: "https://bioglow.rs/og-image.jpg",
  ogUrl: "https://www.bioglow.rs/about",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <Hero
      bgImage="/education-hero.png"
      subtext="education and career consulting"
      bgPosition="50% 75%"
    />
    <div class="pt-[400px] md:pt-[600px]">
      <div class="relative bg-[#ECE9E1] z-2">
        <FacialTraining /><FadeWrapper><WhereWeAre /></FadeWrapper>
      </div>
    </div>
  </div>
</template>
