<script setup>
import flower from "~/assets/images/flower-2.png";
const training = [
  {
    title: "Anatomy of the skin and common conditions",
  },
  {
    title: "How to structure a professional facial treatment",
  },
  {
    title: "Deep cleansing techniques: chemical & manual",
  },
  {
    title: "Skin exfoliation – methods & practice",
  },
  {
    title: "Masks – selection, purpose, application",
  },
  {
    title: "Facial massage techniques – relaxation, toning, lymphatic drainage",
  },
  {
    title: "Spa vs. medical facial treatments",
  },
  {
    title: "Proper product layering: serums, creams, finishing steps",
  },
  {
    title: "The art of creating a calm, client-centered spa experience",
  },
  {
    title: " Practical sessions with models",
  },
  {
    title: "Insights into leading spa brands and protocols",
  },
];
const format = [
  {
    title: "1-on-1 private training, fully personalized",
  },
  {
    title: "Held at Bioglow Studio in Niš, Serbia",
  },
  {
    title: "Includes theory + hands-on practice",
  },
  {
    title: "Duration: 2 to 5 days (depending on program choice)",
  },
  {
    title: "All materials and models are provided",
  },
];
</script>
<template>
  <div class="bg-[#ECE9E1] py-20">
    <div class="container px-4 md:px-10 lg:px-20">
      <h3 class="font-serifDisplay text-[28px] md:text-[38px] text-center">
        Bioglow 1-on-1 Facial Training
      </h3>

      <p class="font-helveticaDisplay my-4 text-center max-w-4xl mx-auto">
        At Bioglow, we believe that expertise is built through presence,
        precision, and practice. Our private facial training program is designed
        for beauty professionals who want to go beyond surface-level treatments
        and master the “spa way” — a method rooted in anatomy, technique, and
        holistic care.
      </p>

      <h4 class="font-sloop text-center w-full text-[32px] md:text-[46px] mt-6">
        What makes our program unique?
      </h4>

      <p class="font-helveticaDisplay text-center max-w-4xl mx-auto">
        Led by an international spa trainer with over a decade of experience in
        five-star hotels and cruise ship spas, this 1-on-1 training is tailored
        to your level and your learning style. Whether you are a beginner or a
        seasoned esthetician looking to refine your touch, the program is built
        to elevate your skill and confidence.
      </p>

      <!-- Three-column section -->
      <div class="flex flex-col md:flex-row items-start my-20 gap-20">
        <div class="w-full md:w-1/3">
          <h5 class="text-center font-semibold mb-2">Format:</h5>
          <ul class="list-disc list-inside">
            <li v-for="item in format" :key="item.title">{{ item.title }}</li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h5 class="text-center font-semibold mb-2">What you will learn:</h5>
          <ul class="list-disc list-inside">
            <li v-for="item in training" :key="item.title">{{ item.title }}</li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h5 class="text-center font-semibold mb-2">Additional support</h5>
          <p class="mb-2 text-center">
            We also offer individual consultations for those seeking:
          </p>
          <ul class="list-disc list-inside">
            <li>Guidance in building or refining their treatment style</li>
            <li>
              Professional support in setting up their own beauty business
            </li>
            <li>Spa service design, pricing, and customer experience tips</li>
            <li>
              Career development and transition within the spa & wellness
              industry
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="flex flex-col w-full text-center mt-20 gap-4">
        <span class="text-[16px] md:text-[18px]">
          Interested in our education programs?
        </span>
        <NuxtLink to="/contact">
          <button
            class="border border-black py-2 px-6 uppercase text-[14px] font-helveticaDisplay"
          >
            contact us to learn more
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
