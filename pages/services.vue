<script setup>
import heroImg from "~/assets/images/hero-small.jpg";
</script>
<template>
  <div>
    <Hero
      :bgImage="heroImg"
      subtext="( redefining beauty with an elevated glow )"
      bgPosition="50% 55%"
    />
    <ServiceCards />
    <SingleDetailedService />
    <MultiDetailedService />
    <WhereWeAre />
  </div>
</template>
