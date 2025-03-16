"use client";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import styles from "../styles/Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sent, setSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ⭐ Starry background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 120 }, () => ({
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm('service_poaum7a', 'template_c5jcuvc', formRef.current, 'FWhXlR7lVAL4clbgu')
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error('❌ Email not sent', err);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <canvas ref={canvasRef} className={styles.contactCanvas}></canvas>

      <h2 className={styles.contactTitle}>CONTACT</h2>

      {/* 💌 Contact Form */}
      <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send </button>
      </form>

      {/* 🚀 Confirmation */}
      {sent && (
        <div className={styles.confirmation}>
          🚀 Message Sent! You're stellar ✨
        </div>
      )}


      {/* 🌌 Social Links */}
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/sanskritishelke/" target="_blank"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/san5kriti" target="_blank"><FaGithub /> GitHub</a>
        <a href="mailto:sanskritishelke.r@gmail.com"><FaEnvelope /> Email</a>
        <a href="https://open.spotify.com/show/5FbN4lYxZUKf6oTQiBFSe3" target="_blank"><FaSpotify /> Podcast</a>
      </div>
      {/*}<img src="/alienbuddy.gif" alt="Alien" className={styles.alienBuddy} />*/}

      {/* 🌌 Footer */}
      <footer className={styles.footer}>
        <p onClick={() => setIsModalOpen(true)} className={styles.footerText}>
          © 2025 Sanskriti Shelke • Made with 💜 & my supportive coffee machine ☕ • <span className={styles.linkish}>Credits & Disclaimer</span>
        </p>
      </footer>

      {/* 🌌 Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h4>Privacy & Credits 👾</h4>
              <p>This website does not track users. All form data is securely sent via EmailJS.</p>
              <p>Video header front page is from Canvas.</p>
              <p>Site fully built including other gifs and visuals by Sanskriti Shelke with no copied repositories.</p>
              <button onClick={() => setIsModalOpen(false)}>Close </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}