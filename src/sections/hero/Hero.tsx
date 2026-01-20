'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './hero.module.css';

export function Hero() {
  const scrollToSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* Video/Image Background */}
      <div className={styles.mediaWrapper}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/premium_berkhamtravel_plane_and_car.jpg"
        >
          {/* Video source will be added later */}
          <source src="/video/private_jet.mp4" type="video/mp4" />
        </video>
        {/* Fallback image */}
        <Image
          src="/premium_berkhamtravel_plane_and_car.jpg"
          alt="Luxury travel"
          fill
          priority
          quality={90}
          className={styles.fallbackImage}
        />
      </div>

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.span
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where travel meets elegance
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className={styles.titleFirst}>Berkham</span>
          <br />
          <span className={styles.titleAccent}>Private Travel </span>
          <br />
          <span className={styles.titleAccent}> & </span>
          <br />
          <span className={styles.titleAccent}>Concierge</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bespoke journeys crafted exclusively around your wishes
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact" className={styles.ctaButton}>

            <div className={styles.box3}>
              <div className={`${styles.btn} ${styles.btnThree}`}>
                <span>Begin Your Journey</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>


    </section>
  );
}
