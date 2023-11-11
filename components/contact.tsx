"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hkchaurasiya20@gmail.com">
          hkchaurasiya20@gmail.com
        </a>{" "}
        or throught this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black/" action={async (formData) => {
        const {data,error} = await sendEmail(formData);
        if(error){
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully")
      }}>
        <input
          placeholder="Your email"
          className="h-14 p-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-950"
          type="email"
          name="senderEmail"
          maxLength={500}
          required 
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 border border-black/10 rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-950"
          maxLength={500}
          name="message"
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
