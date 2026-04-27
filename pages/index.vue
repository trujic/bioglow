<script setup>
useSeoMeta({
  title: "Bioglow | Natural radiance oasis",
  description:
    "Experience luxurious skincare and wellness treatments with Bioglow. Book your appointment today.",
  ogTitle: "Bioglow | Natural radiance oasis",
  ogDescription:
    "Experience luxurious skincare and wellness treatments with Bioglow.",
  ogImage: "https://bioglow.rs/og-image.jpg",
  ogUrl: "https://www.bioglow.rs/",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <WelcomeToBioglow />
    <div class="bg-[#ECE9E1]">
      <FadeWrapper> <LazyPassionate hydrate-on-visible /> </FadeWrapper
      ><FadeWrapper><LazyOurService hydrate-on-visible /></FadeWrapper
      ><FadeWrapper><LazyAboutUs hydrate-on-visible /></FadeWrapper
      ><FadeWrapper><LazyWhereWeAre hydrate-on-visible /></FadeWrapper>
    </div>
  </div>
</template>
