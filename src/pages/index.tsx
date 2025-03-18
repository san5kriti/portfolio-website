"use client";
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import styles from "../styles/Home.module.css";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Typewriter from "typewriter-effect";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const smoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust the offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <main className={styles.hero}>
        {/* Background Video */}
        <video autoPlay loop muted playsInline className={styles.videoBackground}>
          <source src="/cosmos.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Top Left Initials */}
        <div className={styles.initials}>SS.</div>

        {/* Content */}
        <div className={styles.content}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.greeting}
          >
            HI, I’M
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={styles.name}
          >
            SANSKRITI SHELKE
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={styles.subtitle}
          >
            <Typewriter
              options={{
                strings: [
                  "AI COM SCI STUDENT",
                  "Freelancer",
                  "Aspiring AI Engineer",
                  "Quantum Tech Enthusiast",
                  "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </motion.h3>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className={styles.buttons}
        >
          <button className={styles.btn} onClick={(e) => smoothScroll(e, "about")}>
            ABOUT
          </button>
          <button className={styles.btn} onClick={(e) => smoothScroll(e, "education")}>
            EDUCATION
          </button>
          <button className={styles.btn} onClick={(e) => smoothScroll(e, "projects")}>
            PROJECTS
          </button>
          <button className={styles.btn} onClick={(e) => smoothScroll(e, "contact")}>
            CONTACT
          </button>
        </motion.div>
      </main>


      <About />
      <Education />
      <Projects />
      <Contact />
      <Analytics/>
    </>
  );
}