<script setup>
import contactFormBg from "~/assets/images/contact-form-bg.jpg";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

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
    class="py-10 md:py-40 bg-cover"
    :style="`background-image: url(${contactFormBg})`"
  >
    <div class="container">
      <h2
        class="text-[24px] md:text-[64px] text-[#2A2B30] text-center font-light pb-[24px] font-serifDisplay tracking-[-1px] md:tracking-[-4px] uppercase"
      >
        Book an appointment &nbsp; / &nbsp;
        <span
          class="font-signature tracking-[0px] text-[40px] md:text-[60px] lowercase font-regular"
          style="
            text-shadow: -0.5px -0.5px 0 #2a2b30, 0.5px -0.5px 0 #2a2b30,
              -0.5px 0.5px 0 #2a2b30, 0.5px 0.5px 0 #2a2b30;
          "
        >
          leave us a note
        </span>
      </h2>

      <Form
        :validation-schema="schema"
        @submit="(values) => console.log(values)"
        class="bg-[#D4CEBC] pt-6 md:pt-20 pb-24 px-4 md:px-40 flex flex-col gap-4 max-w-[800px] m-auto relative"
        id="booking"
      >
        <div class="flex flex-col">
          <label
            class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
          >
            Full name
          </label>
          <Field
            name="name"
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
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
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
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
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
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
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
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
            class="uppercase font-light font-helveticaDisplay text-xs md:text-base tracking-[1px]"
          >
            Select a date
          </label>
          <Field
            name="date"
            type="date"
            :min="new Date(Date.now() + 86400000).toISOString().split('T')[0]"
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
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
            class="bg-[#D4CEBC] border-b border-black outline-none text-xs md:text-base"
          />
          <ErrorMessage name="message" class="text-red-600 text-sm" />
        </div>

        <div class="absolute bottom-4 right-10">
          <button
            type="submit"
            class="max-w-fit border border-black p-2 px-8 md:px-14 rounded-[50%] uppercase font-light text-xs md:text-base"
          >
            send
          </button>
        </div>
      </Form>
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
