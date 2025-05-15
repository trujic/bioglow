<script setup>
import contactFormBg from "~/assets/images/contact-form-bg.jpg";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import envelope from "~/assets/images/envelope.png";

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
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  treatment: yup.string(),
  date: yup
    .date()
    .min(new Date(Date.now() + 86400000), "Date must be tomorrow or later"),
  message: yup.string(),
});
</script>

<template>
  <div
    class="py-20 md:py-40 bg-cover"
    :style="`background-image: url(${contactFormBg})`"
  >
    <div class="container">
      <div class="relative px-4 md:px-0">
        <img
          :src="envelope"
          alt="envelope"
          class="absolute bottom-[-120px] md:bottom-[-250px] left-1/2 transform -translate-x-1/2 max-w-[850px] w-full z-0"
        />
        <Form
          :validation-schema="schema"
          @submit="(values) => console.log(values)"
          class="bg-[#ECE9E1] pt-6 md:pt-20 pb-24 px-4 md:px-20 flex flex-col gap-4 max-w-[550px] m-auto relative z-10 border border-black"
          id="booking"
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
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
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
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
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
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
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
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
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
              :min="new Date(Date.now() + 86400000).toISOString().split('T')[0]"
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
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
              class="bg-[#ECE9E1] border-b border-black outline-none text-xs md:text-base"
            />
            <ErrorMessage name="message" class="text-red-600 text-sm" />
          </div>

          <div class="absolute bottom-4 right-10">
            <button
              type="submit"
              class="max-w-fit border-b border-black md:p-2 px-4 font-light text-[26px] md:text-[40px] font-sloop"
            >
              Send
            </button>
          </div>
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
