"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About",1);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        <span className="font-bold">Hey! </span>I am{" "}
        <span className="font-bold">Himanshu Kumar</span>, a{" "}
        <span className="font-bold">Computer Science undergraduate</span> from{" "}
        <span className="font-bold">IIIT Lucknow</span>, specializing in{" "}
        <span className="font-bold">Information Security</span> and{" "}
        <span className="font-bold">Backend Development</span>. My academic
        and professional experiences reflect my dedication to mastering the
        intricacies of cybersecurity and software development.
      </p>
      <p className="mt-10">
        My portfolio showcases a variety of{" "}
        <span className="font-bold">projects</span>, including my significant
        contributions to <span className="font-bold">grOSS</span>,{" "}
        <span className="italic">an open-source security tool</span>, and my
        active role in organizing and developing challenges for the annual
        <span className="font-bold"> Capture The Flag</span> event at{" "}
        <span className="font-bold">IIIT Lucknow</span>. These experiences
        underscore my ability to lead, innovate, and solve complex problems in
        the tech space.
      </p>
    </motion.section>
  );
}
