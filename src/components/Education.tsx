"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "../styles/Education.module.css";
import {
  FaPython, FaJava, FaReact, FaBrain, FaCodeBranch, FaCogs,
} from "react-icons/fa";
import {
  SiTensorflow, SiNextdotjs, SiNumpy, SiPytorch, SiQiskit, SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: <FaPython className={styles.skillIcon} />, name: "Python" },
  { icon: <FaJava className={styles.skillIcon} />, name: "Java" },
  { icon: <FaReact className={styles.skillIcon} />, name: "React.js" },
  { icon: <SiNextdotjs className={styles.skillIcon} />, name: "Next.js" },
  { icon: <SiTensorflow className={styles.skillIcon} />, name: "TensorFlow" },
  { icon: <SiNumpy className={styles.skillIcon} />, name: "NumPy" },
  { icon: <SiPytorch className={styles.skillIcon} />, name: "PyTorch" },
  { icon: <SiQiskit className={styles.skillIcon} />, name: "Qiskit" },
  { icon: <SiJavascript className={styles.skillIcon} />, name: "JavaScript" },
  { icon: <FaBrain className={styles.skillIcon} />, name: "AI/ML" },
  { icon: <FaCodeBranch className={styles.skillIcon} />, name: "Git/GitHub" },
  { icon: <FaCogs className={styles.skillIcon} />, name: "Software Engineering" },
];

export default function Education() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const finalText = "EDUCATION";
  const [displayText, setDisplayText] = useState("#".repeat(finalText.length));

  // Hash animation
  useEffect(() => {
    setDisplayText("#".repeat(finalText.length));
    let charIndex = 0;
    const revealInterval = setInterval(() => {
      setDisplayText((prevText) => {
        if (charIndex >= finalText.length) {
          clearInterval(revealInterval);
          return finalText;
        }
        return finalText.substring(0, charIndex + 1) + "#".repeat(finalText.length - charIndex - 1);
      });
      charIndex++;
    }, 80);
    return () => clearInterval(revealInterval);
  }, []);

  // Starry background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
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
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.section
      id="education"
      className={styles.educationSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <canvas ref={canvasRef} className={styles.starCanvas}></canvas>

      {/* Left Panel */}
      <motion.div
        className={styles.educationInfo}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.hashText}>{displayText}</h2>
        <p className={styles.subHeading}>
          BSc AI & Computer Science <br />
          <span>University of Birmingham (2022-2025)</span>
        </p>
        <p className={styles.description}>
          Starting my undergraduate journey at 16, I immersed myself in core AI and Computer Science modules, some of my favourite were:
        </p>
        <ul className={styles.moduleList}>
          <li><span className={styles.highlight}>Advanced Functional Programming</span></li>
          <li><span className={styles.highlight}>Algorithms & Complexity</span></li>
          <li><span className={styles.highlight}>Artificial Intelligence 1 & 2</span></li>
          <li><span className={styles.highlight}>Full Stack Application Development</span></li>
          <li><span className={styles.highlight}>Machine Learning</span></li>
          <li><span className={styles.highlight}>Neural Computation</span></li>
          <li><span className={styles.highlight}>Software Engineering & Professional Practice</span></li>
        </ul>
        <p className={styles.certLink}>
            <a href="https://www.linkedin.com/in/sanskritishelke/details/certifications/" target="_blank" rel="noopener noreferrer">
              🔗 View My Certifications & Awards →
            </a>
        </p>
      </motion.div>



      {/* GIF */}
      <motion.div
        className={styles.pixelGifContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="/com.gif" alt="Animation" width="300" height="300" />
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className={styles.skillSet}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className={styles.skillHeading}>SKILL SET</h2>
        <div className={styles.skillList}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillItem}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              {skill.icon}
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}