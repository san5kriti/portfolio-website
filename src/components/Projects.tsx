"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Projects.module.css";
import Link from "next/link";

const projects = [
  { name: "Memory Mate", link: "https://github.com/san5kriti", tech: "AI / Next.js", description: "A smart study assistant powered by AI.", status: "🚀 In Progress", image: "/memorymate.png" },
  { name: "Orbitron", link: "https://orbitronspace.vercel.app/", tech: "Space Tech / JS", description: "DEMO NOW AVAILABLE A web app for stargazing & orbital tracking.", status: "🔭 Researching", image: "/orbitron.png" },
  { name: "Studique", link: "https://github.com/san5kriti", tech: "Wellness / React", description: "Focus-enhancing study tool with Pomodoro & music.", status: "📑 In Progress", image: "/studique.png" },
  { name: "Philatos", link: "https://philatos.vercel.app/", tech: "Mythology / Dictionary", description: "A Greek mythology dictionary & reference guide.", status: "📑 In Progress", image: "/philatos.png" },
  { name: "Quantora", link: "https://github.com/san5kriti", tech: "Finance / AI", description: "A live stock analysis & AI prediction tool.", status: "📊 Researching", image: "/quantora.png" },
  { name: "Virtual Library", link: "https://virtuallib.vercel.app/", tech: "Education", description: "An immersive focus space for students.", status: "✅Deployed", image: "/virtuallib.png" },
  { name: "Esoteric Daughter", link: "https://esotericdaughter.vercel.app/", tech: "Personal", description: "Personalised Blog", status: "✅Deployed", image: "/blog.png" }
];

export default function Projects() {
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
      id="projects"
      className={styles.projectsSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <canvas ref={canvasRef} className={styles.starCanvas}></canvas>

      {/* ✨ Shooting Stars */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={styles.shootingStar}
          style={{
            top: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      <motion.h2
        className={styles.centerTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h2>

      {/* 🛰️ Project Grid */}
      <motion.div
        className={styles.projectGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.name} className={styles.projectImage} />
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectTech}>{project.tech}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            <p className={styles.projectStatus}>{project.status}</p>
          </motion.a>
        ))}

        {/* 🎥 GIF beside grid */}
        <div className={styles.pixelGifContainer}>
          <img src="astronaut.gif" alt="Animation" />
        </div>

        {/* 📚 Resource Links */}
        <div className={styles.linksSpot}>
          <a href="https://medium.com/@san5kriti" target="_blank" rel="noopener noreferrer">🧬️ Medium Blogs</a>
          <a href="https://www.redbrick.me/author/sanskriti/" target="_blank" rel="noopener noreferrer">🔭 Redbrick Articles</a>
          <a href="https://www.academia.edu/117276738/Pythons_Influence_On_The_Development_Of_Other_Programming_Languages" target="_blank" rel="noopener noreferrer">🛰️ Academia Paper</a>
          <a href="https://open.spotify.com/show/5FbN4lYxZUKf6oTQiBFSe3" target="_blank" rel="noopener noreferrer">🪐️ Metamorphoses Podcast</a>
        </div>
      </motion.div>
    </motion.section>
  );
}