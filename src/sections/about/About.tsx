'use client';

import { motion } from 'framer-motion';
import styles from './about.module.css';
import Image from 'next/image';
import { TagTitle, Title, TitleAccent } from '@/components/title/Title';

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
          <TagTitle >About Us</TagTitle>

          <Title >
            Creating Bespoke Journeys
            <br />
            <TitleAccent >Beyond the Ordinary</TitleAccent>
          </Title>

          <div className={styles.text}>
            <p>
              Berkham Team creates journeys for those who value discretion, precision and personal rhythm, with a focus on clarity, structure and intelligent planning rather than excess.
            </p>
            <p>
              Each journey is built around your priorities, with close attention to privacy, timing and detail, and delivered through a limited circle of trusted partners and destinations chosen for their consistency and standards.            </p>
            <p>
              Every element is coordinated quietly and efficiently, allowing travel to unfold as it should be — considered, personal and seamless.
            </p>
          </div>

          {/* Trust Signal - Re-styled as a Badge */}
          <div className={styles.trustSignal}>
            <div className={styles.trustContent}>
              <span className={styles.trustLabel}>Proud Member of</span>
            </div>
            <div className={styles.trustIcon}>
              {/* Leading Hotels Icon */}
              {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
               </svg> */}
              <Image
                src="/partners/logo_home_1.png"
                alt="The Leading Hotels of the World"
                width={200}
                height={200}
              />
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