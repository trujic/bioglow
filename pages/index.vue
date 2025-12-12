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
      <FadeWrapper> <Passionate hydrate-on-visible /> </FadeWrapper
      ><FadeWrapper><OurService hydrate-on-visible /></FadeWrapper
      ><FadeWrapper><AboutUs hydrate-on-visible /></FadeWrapper
      ><FadeWrapper><WhereWeAre hydrate-on-visible /></FadeWrapper>
    </div>
  </div>
</template>
