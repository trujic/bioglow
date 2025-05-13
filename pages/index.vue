<script setup>
import heroImg from "~/assets/images/hero.jpg";
</script>
<template>
  <div>
    <Hero
      :bgImage="heroImg"
      title="Let us help you"
      titleMark="glow"
      subtext="( welcome to your natural radiance oasis )"
      cta="book now"
    /><Welcome /><Passionate /><OurService /><AboutUs /><WhereWeAre />
  </div>
</template>
