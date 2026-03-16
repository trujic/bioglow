<script setup>
import { ref } from "vue";
import flower from "~/assets/images/flower-2.png";
import logo from "~/assets/images/bio-glow-logo.png";

// accordion state
const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// sections
const educationSections = [
  {
    title: "EDUCATION & CONSULTING",
    html: `<p>BIOGLOW Education is designed for professionals and individuals who wish to deepen their understanding of skin health, facial treatment design, and modern spa practices.</p><br>

<p>Drawing from international spa experience and professional skincare systems, these programs combine practical knowledge, refined manual techniques, and a holistic approach to treatment.</p><br>

<p>The focus is not only on learning techniques, but on elevating the quality of treatment experience and professional confidence.</p><br>

<p>Trainings are conducted in small groups or one-on-one formats to ensure a focused and personalized learning environment.</p><br>

<p>All education sessions are held in Belgrade (Vracar) and Nis (city center).</p>`,
  },
  {
    title: "FACIAL TREATMENT EDUCATION",
    html: `
      <p>
        Professional training for therapists and beauty specialists who wish to elevate their facial treatments to a higher professional and experiential level.
      </p>
      <br>
      <p>
        These workshops focus on modern facial techniques and treatment structuring used in high-end spa environments, combining technical precision with a refined client experience.
      </p>
      <br>
      <p>Topics may include:</p>
      <ul>
        <li>Professional skin assessment and consultation</li>
        <li>Designing complete facial treatment flows</li>
        <li>Modern manual techniques such as <i>gua sha, facial cupping, and toning massage</i></li>
        <li>Creating lifting and sculpting facial sequences</li>
        <li>Integrating professional skincare systems into treatments</li>
        <li>Developing a <strong>five-star facial experience</strong> through touch, rhythm, and atmosphere</li>
        <li>Elevating treatment presentation and client communication</li>
      </ul>

      <p>
        The goal of these trainings is to help therapists refine their technique, elevate their service standards, and deliver treatments that feel both effective and memorable.
      </p>

      <p>Available formats:</p>
      <ul>
        <li>1-day workshops</li>
        <li>Weekend intensive training</li>
        <li>Private one-on-one education</li>
      </ul>
    `,
  },
  {
    title: "SKINCARE WORKSHOPS",
    html: `<p>Educational workshops designed for individuals who wish to better understand their skin and learn how to care for it effectively.<br>

These sessions focus on practical knowledge that helps participants make better skincare decisions and build routines suited to their skin’s needs.</p>

<p>Topics may include:</p>
<ul>
        <li>Understanding skin types and conditions</li>
        <li>Building a personalized skincare routine</li>
        <li>Common skincare mistakes</li>
        <li>Product selection and ingredient basics</li>
        <li>Maintaining long-term skin health</li>
      </ul>
      <p>Workshops are conducted in small groups to allow open discussion and personalized guidance.</p>
`,
  },
  {
    title: "SPA & BEAUTY CONSULTING",
    html: `<p>Consulting services for spa studios, beauty professionals, and wellness businesses seeking support in developing treatment concepts and service standards.<br><p>
          <p>Consulting may include:</p>
<ul>
        <li>Treatment menu development</li>
        <li>Facial and body protocol design</li>
        <li>Therapist training and mentoring</li>
        <li>Spa concept development</li>
        <li>Service quality and client experience design</li>
      </ul>
      <p>These services draw on experience from international spa environments and professional skincare systems.<br>Consulting is available <strong>by request.</strong></p>
`,
  },
];
</script>

<template>
  <div class="bg-[#ECE9E1] md:py-20 py-10 relative">
    <div>
      <!-- HEADER -->
      <div class="mb-32 md:mb-60 px-4 md:px-0">
        <h3
          class="text-[36px] md:text-[64px] text-black text-center font-light pb-[12px] md:pb-[24px] font-serifDisplay leading-[60px] md:leading-[100px] tracking-[-3px] md:tracking-[-6px] mt-20 md:mt-30"
        >
          Education & Consulting
        </h3>

        <p
          class="font-helveticaDisplay my-4 text-justify md:text-center max-w-3xl mt-4 md:mt-12 md:mx-auto"
        >
          BIOGLOW Education is designed for professionals and individuals who
          wish to deepen their understanding of skin health, facial treatment
          design, and modern spa practices. <br /><br />Drawing from
          international spa experience and professional skincare systems, these
          programs combine practical knowledge, refined manual techniques, and a
          holistic approach to treatment.<br /><br />
          The focus is not only on learning techniques, but on elevating the
          quality of treatment experience and professional confidence. Trainings
          are conducted in small groups or one-on-one formats to ensure a
          focused and personalized learning environment.<br /><br />
          All education sessions are held in
          <strong>Belgrade (Vracar) and Nis (city center).</strong>
        </p>
      </div>

      <!-- VIDEO -->
      <FadeWrapper>
        <div class="relative h-[60vh] md:h-[70vh]">
          <video
            src="/videos/education-divider-video.mp4"
            autoplay
            muted
            loop
            playsinline
            class="absolute w-full h-[60vh] md:h-[70vh] object-cover"
            loading="lazy"
          ></video>
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <img :src="logo" alt="white logo" class="w-56" />
          </div>
        </div>
      </FadeWrapper>

      <!-- INTRO -->
      <FadeWrapper>
        <div class="mt-32 md:mt-60 md-20 md:mb-40">
          <h4
            class="font-sloop text-center w-full text-[32px] md:text-[46px] mb-10"
          >
            What makes our program unique?
          </h4>

          <p
            class="font-helveticaDisplay text-justify md:text-center max-w-4xl mx-4 md:mx-auto"
          >
            Led by an international spa trainer with over a decade of experience
            in five-star hotels and cruise ship spas, this 1-on-1 training is
            tailored to your level and your learning style. Whether you are a
            beginner or a seasoned esthetician looking to refine your touch, the
            program is built to elevate your skill and confidence.
          </p>
        </div>
      </FadeWrapper>

      <!-- ACCORDION SECTION -->
      <FadeWrapper>
        <div class="max-w-3xl mx-4 md:mx-auto my-20">
          <div
            v-for="(section, i) in educationSections"
            :key="i"
            class="border-b border-black py-6"
          >
            <!-- TITLE + PLUS ICON -->
            <div
              class="flex items-center justify-between cursor-pointer"
              @click="toggleAccordion(i)"
            >
              <h5 class="uppercase">{{ section.title }}</h5>

              <!-- PLUS / MINUS ICON -->
              <span class="text-[20px] leading-none select-none">
                {{ openIndex === i ? "−" : "+" }}
              </span>
            </div>

            <!-- CONTENT -->
            <transition name="fade">
              <transition name="fade">
                <div v-if="openIndex === i" class="mt-4 py-6 md:py-10">
                  <!-- Simple list sections -->
                  <ul
                    v-if="section.items"
                    class="list-disc list-inside space-y-2"
                  >
                    <li
                      v-for="(item, idx) in section.items"
                      :key="idx"
                      class="ml-4"
                    >
                      {{ item }}
                    </li>
                  </ul>

                  <!-- HTML sections -->
                  <div
                    v-else-if="section.html"
                    v-html="section.html"
                    class="font-helveticaDisplay [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>li]:ml-2 p-4"
                  ></div>
                </div>
              </transition>
            </transition>
          </div>
        </div>

        <!-- CTA -->
        <div class="flex flex-col w-full text-center mt-40 gap-6 pb-10 md:pb-0">
          <span class="text-[16px] md:text-[18px]">
            Interested in our education programs?
          </span>
          <div class="container">
            <NuxtLink to="/contact">
              <button class="button">
                <span class="relative z-10">contact us</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </FadeWrapper>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
