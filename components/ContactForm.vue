<script setup>
import contactFormBg from "~/assets/images/contact-form-bg.jpg";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";

const bookingForm = ref();
const loading = ref(false);
const emailSent = ref(false);
const message = ref("");
// List of treatments
const treatments = [
  "DR Schrammek DERMAFACIAL (60 min)",
  "DR Schrammek DERMAFACIAL (90 min)",
  "DR Schrammek Cleanse & Go",
  "Swedish massage",
  "Drain & Sculpt",
  "Drift Away Scalp & Neck",
  "Walk On Clouds",
  "Bioglow Full Body Bliss",
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
</script>

<template>
  <div
    class="py-20 md:py-40 bg-cover"
    :style="`background-image: url(${contactFormBg})`"
  >
    <div class="container">
      <div class="relative px-4 md:px-0">
        <NuxtImg
          src="/envelope.png"
          format="webp"
          alt="envelope"
          class="absolute bottom-[-120px] md:bottom-[-250px] left-1/2 transform -translate-x-1/2 max-w-[850px] w-full z-0"
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
          class="z-40 text-center bg-[#ECE9E1] p-4 border border-black max-w-[300px] m-auto"
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
              Book an appointment
            </h4>
            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                Full name
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
                Phone
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
                Select a treatment
              </label>
              <Field
                as="select"
                name="treatment"
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base hover:cursor-pointer"
              >
                <option value="" disabled>Select a treatment</option>
                <option v-for="t in treatments" :key="t" :value="t">
                  {{ t }}
                </option>
              </Field>
              <ErrorMessage name="treatment" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px] w-full"
              >
                Select a date
              </label>
              <Field
                name="date"
                type="date"
                :min="
                  new Date(Date.now() + 86400000).toISOString().split('T')[0]
                "
                class="bg-[#ECE9E1] border-b border-black outline-none text-base md:text-base"
              />
              <ErrorMessage name="date" class="text-red-600 text-sm" />
            </div>

            <div class="flex flex-col">
              <label
                class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
              >
                Message
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
                <span v-if="!loading">Send</span>
                <span v-else>Sending...</span>
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
