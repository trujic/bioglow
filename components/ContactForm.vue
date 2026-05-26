<script setup>
import contactFormBg from "~/assets/images/contact-form-bg.webp";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";

const bookingForm = ref();
const loading = ref(false);
const emailSent = ref(false);
const message = ref("");
// List of treatments
const treatments = [
  "BIOGLOW Signature Skin Ritual — 60 min / 6500 RSD",
  "BIOGLOW Signature Skin Ritual Extended — 90 min / 10,000 RSD",
  "BIOGLOW Cleanse & Go — 40 min / 4,200 RSD",
  "BIOGLOW Signature Renewal Ritual — 150 min / 12,500 RSD",
  "Precision Skin Refinement — 1,500 RSD",
  "Hand Glow Ritual — 1,800 RSD",
  "Body Sculpt Add-On — 20 min / 2,500 RSD",
  "Deep Release Body Ritual — 50 min / 4,500 RSD",
  "Deep Release Body Ritual Extended — 80 min / 6,800 RSD",
  "Leg Renewal Sculpt Ritual — 30 / 50 min - 3,000 / 4,800 RSD",
  "Head & Neck Reset Ritual — 30 min / 3,000 RSD",
  "Reflex Balance Foot Ritual — 50 min / 4,800 RSD",
  "BIOGLOW Body Sculpt Ritual — 90 min / 7,900 RSD",
  "Targeted Contour Session — 30-40 min / 4,200 RSD",
  "Signature Gloss Manicure Ritual — 2,500 RSD",
  "Signature Gloss Manicure Ritual – Spa Edition — 3,000 RSD",
  "Natural Hand Care Ritual — 2,000 RSD",
  "Smooth skin ritual (waxing) — 30 - 50 - 80 min / 1,500 - 2,500 - 4,000 RSD",
  "BIOGLOW Silhouette Program — 6 tretmana + Signature Renewal Ritual / 30,900 RSD",
  "BIOGLOW Sculpt & Lift Express — 6 tretmana / 22,000 RSD",
  "Virtual consultations / 3,000 RSD",
];

// Validation schema
const schema = yup.object({
  name: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\d{9,}$/,
      "Phone number must be at least 9 digits and contain only numbers"
    ),
  email: yup.string().email("Invalid email").required("Email is required"),
  treatment: yup.string(),
  date: yup
    .date()
    .min(
      new Date(new Date().setHours(0, 0, 0, 0) + 86400000),
      "Date must be tomorrow or later"
    ),
  message: yup.string(),
});

async function onSubmit(values, resetForm) {
  loading.value = true;
  try {
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      message.value = `Error while trying to send email. Please try again later.`;
      emailSent.value = true;
      return;
    }

    message.value = "Thank you for contacting us!";
    emailSent.value = true;
    resetForm(); // ✅ works without relying on a ref
  } catch (error) {
    message.value = "Error while trying to send email: " + error.message;
    emailSent.value = true;
  } finally {
    loading.value = false;
  }
}

import { onMounted, onUnmounted } from "vue";

const target = ref(null);
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, "700");
});
</script>

<template>
  <div class="relative py-20 md:py-40 bg-cover z-10 bg-[#ECE9E1]">
    <div class="container">
      <div class="relative">
        <NuxtImg
          src="/envelope.png"
          format="webp"
          alt="envelope"
          class="absolute bottom-[-120px] md:bottom-[-250px] left-1/2 transform -translate-x-1/2 max-w-[850px] w-full z-10"
          ref="target"
          :class="[
            'transition-all duration-1000 ease-out',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-40',
          ]"
        />
        <div
          v-if="loading"
          class="fixed inset-0 bg-[#ECE9E1]/80 flex items-center justify-center z-50"
        >
          <svg
            class="animate-spin h-12 w-12 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
        <div
          v-else-if="emailSent"
          class="z-10 relative text-center bg-[#ECE9E1] p-4 border border-black max-w-[350px] m-auto"
        >
          <p>{{ message }}</p>
        </div>
        <Form
          v-else
          ref="bookingForm"
          :validation-schema="schema"
          v-slot="{ handleSubmit, resetForm }"
        >
          <form
            @submit.prevent="
              handleSubmit((values) => onSubmit(values, resetForm))
            "
            class="bg-[#ECE9E1] pt-6 md:pt-20 pb-24 px-4 md:px-20 flex flex-col gap-4 max-w-[550px] m-auto relative z-10 border border-black"
            id="booking"
            name="booking"
          >
            <h4
              class="text-[34px] md:text-[46px] text-[#2A2B30] text-center font-light pb-[24px] font-sloop tracking-[-1px] md:tracking-[2px]"
            >
              {{ $t("Book an appointment") }}
            </h4>
            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                {{ $t("Full name") }}
              </label>
              <Field
                name="name"
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base"
              />
              <ErrorMessage name="name" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                {{ $t("Phone") }}
              </label>
              <Field
                name="phone"
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base"
              />
              <ErrorMessage name="phone" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                Email
              </label>
              <Field
                name="email"
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base"
              />
              <ErrorMessage name="email" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                {{ $t("Select a treatment") }}
              </label>
              <Field
                as="select"
                name="treatment"
                class="bg-[#ECE9E1] border-b border-black outline-none text-[14px] md:text-base hover:cursor-pointer"
              >
                <option value="" disabled>
                  {{ $t("Select a treatment") }}
                </option>
                <option v-for="item in treatments" :key="item" :value="item">
                  {{ item }}
                </option>
              </Field>
              <ErrorMessage name="treatment" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px] w-full"
              >
                {{ $t("Select a date") }}
              </label>
              <Field
                name="date"
                type="date"
                :min="
                  new Date(Date.now() + 86400000).toISOString().split('T')[0]
                "
                class="bg-[#ECE9E1] border-b border-black outline-none text-[14px] md:text-base"
              />
              <ErrorMessage name="date" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                {{ $t("Message") }}
              </label>
              <Field
                as="textarea"
                name="message"
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base"
              />
              <ErrorMessage name="message" class="text-red-600 text-sm" />
            </div>

            <div class="absolute bottom-4 right-10">
              <button
                type="submit"
                :disabled="loading"
                class="max-w-fit border-b border-black md:p-2 px-4 font-light text-[26px] md:text-[40px] font-sloop"
              >
                <span v-if="!loading">{{ $t("Send") }}</span>
                <span v-else>{{ $t("Sending...") }}</span>
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form label {
  margin-bottom: 4px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #d4cebc inset !important;
}
</style>
