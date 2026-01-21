'use client';

import { motion } from 'framer-motion';
import styles from './about.module.css';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        
        {/* Content Centered */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Divider Line */}
          <div className={styles.topDivider} />

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
              No pressure, no rush — just considered recommendations and seamless arrangements
              that respect your time and rhythm.
            </p>
          </div>

          {/* Trust Signal - Re-styled as a Badge */}
          <div className={styles.trustSignal}>
            <div className={styles.trustIcon}>
               {/* Leading Hotels Icon */}
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg>
            </div>
            <div className={styles.trustContent}>
               <span className={styles.trustLabel}>Proud Member of</span>
               <span className={styles.trustTitle}>The Leading Hotels of The World</span>
            </div>
          </div>

          <a href="#services" className={styles.cta}>
            Explore Our Services<span className={styles.ctaBox}>

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