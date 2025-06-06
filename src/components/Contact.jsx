import { RiFacebookLine, RiGithubFill, RiTwitterLine } from "@remixicon/react";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".contact-icon", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);
    return ()=> ctx.revert()
  }, []);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a href="mailto:itlmh23@gmail.com" className="border-b">
            itlmh23@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/HoaJP"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon "
            aria-label="Visit my Github profile"
          >
            <RiGithubFill className="text-3xl hover:text-pink-400 hover:scale-120 hover:-translate-y-[2px] transition-all duration-[500ms] ease-in-out" />
          </a>
          <a
            href="https://www.facebook.com/luong.manh.hoa.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Facebook profile"
          >
            <RiFacebookLine className="text-3xl hover:text-pink-400 hover:scale-120 hover:-translate-y-[2px] transition-all duration-[500ms] ease-in-out" />
          </a>
          <a
            href="https://x.com/itlmh23"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Twitter profile"
          >
            <RiTwitterLine className="text-3xl hover:text-pink-400 hover:scale-120 hover:-translate-y-[2px] transition-all duration-[500ms] ease-in-out" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
