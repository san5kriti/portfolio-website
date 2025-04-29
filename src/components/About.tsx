"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "../styles/About.module.css";

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
      if (!canvas || !ctx) return; // 🛡️ Double safety check

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
        }
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  return (
    <motion.section
      id="about"
      className={styles.aboutSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* 🌌 Tiny Moving Star Background */}
      <div className={styles.starContainer}>
        <canvas ref={canvasRef} className={styles.starCanvas}></canvas>
      </div>

      {/* Animated Title */}
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        &lt;/ABOUT&gt;
      </motion.h2>

      <div className={styles.pixelGifContainer}>
        <img src="/pookie.gif" alt="Animation" width="300" height="300" />
      </div>

      {/* Main Content */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className={styles.description}>
          I’m <span className={styles.highlight}>Sanskriti Shelke</span>, a 19-year-old from Singapore,
          soon to graduate with a degree in AI & Computer Science from the
          <span className={styles.accent}> University of Birmingham</span>.
          <br /><br />
          I'm passionate about <span className={styles.accent}>Machine Learning</span>,
          <span className={styles.accent}> Quantum Computing</span>, and
          <span className={styles.accent}> Software Engineering</span>,
          focusing on real-world AI innovation—basically, if it’s complex and sounds like sci-fi, I’m all in.
          <br /><br />
          From crafting intelligent systems to exploring quantum algorithms,
          I’m here to turn “this is theoretical” into “wow, it actually works.”
          When I'm not balancing intellectual pursuits, you’ll find me lost in ancient epics or wandering museums.
          A cosmic romantic at heart, I balance wormholes with Homer, time dilation with Botticelli, and string theory with a healthy obsession for the stars—somehow, it all orbits together (in my universe, at least). 👩🏼‍🚀🌀
          <br /><br />
          My latest paper, <span className={styles.highlight}>Meta-Hybrid Classical-Quantum-inspired Optimization for the TSP: A Comparative Analysis</span>,
          introduces ten new novel hybrid algorithms combining classical and quantum heuristics.
          I’m finalizing the code and manuscript, soon to be published on Academia.edu and GitHub! 🧬💗☕️🧠

        </p>
      </motion.div>
    </motion.section>
  );
}