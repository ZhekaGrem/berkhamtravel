'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './about.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Image Column */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/premium_berkhamtravel_plane_and_car_2.jpg"
              alt="Luxury travel experience"
              fill
              quality={85}
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
          </div>
          {/* Decorative border */}
          <div className={styles.imageBorder} />
        </motion.div>

        {/* Content Column */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagline}>About Us</span>

          <h2 className={styles.title}>
            Creating Bespoke Journeys
            <br />
            <span className={styles.titleAccent}>Beyond the Ordinary</span>
          </h2>

          <div className={styles.text}>
            <p>
              Travel specializes in creating bespoke journeys that go beyond the ordinary.
              We anticipate the latest trends in premium tourism to bring you experiences
              crafted exclusively around your wishes.
            </p>
            <p>
              As trusted partners of world-leading hotel networks, we offer privileged rates
              and a seamless, first-class service at every stage of your trip.
            </p>
          </div>

          {/* Trust Signal */}
          <motion.div
            className={styles.trustSignal}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.trustBadge}>
              <div className={styles.trustIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className={styles.trustText}>
                <span className={styles.trustLabel}>Proud Member</span>
                <span className={styles.trustTitle}>The Leading Hotels of The World</span>
              </div>
            </div>
            <p className={styles.trustDescription}>
              We are proud to be a member of the exclusive and limited club of
              The Leading Hotels of The World
            </p>
          </motion.div>

          <a href="#services" className={styles.cta}>
            Explore Our Services
            <span className={styles.ctaBox}>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
