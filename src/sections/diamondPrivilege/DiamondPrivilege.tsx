'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './diamondPrivilege.module.css';
import { TagTitle, Title, TitleAccent } from '@/components/title/Title';
export function DiamondPrivilege() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('BERKHAM15');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'BERKHAM15';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Gold Corners */}
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
        <span className={`${styles.corner} ${styles.cornerBL}`} />
        <span className={`${styles.corner} ${styles.cornerBR}`} />

        {/* Card Inner */}
        <div className={styles.cardInner}>

          {/* Level A: Status */}
          <TagTitle>
            Strategic Partnership
          </TagTitle>



          {/* Level B: Brand Title */}
          {/* <Title>
            Boutique{' '}
            <TitleAccent>Eco Diamant</TitleAccent>
          </Title> */}

          {/* Partner Logo */}
          <div
            className={styles.logo}
            role="img"
            aria-label="Boutique Eco Diamant"
          />

          {/* Thin divider */}
          <motion.div
            className={styles.divider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Level C: Context */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            As an exclusive partner of Berkham, we are proud to offer a privileged
            advantage to their distinguished travel and concierge clientele. Boutique
            Eco Diamant is founded on a shared commitment to discretion, craftsmanship,
            and conscious luxury.
          </motion.p>

          {/* Level D: "Safe" — Benefit Block */}
          <motion.div
            className={styles.benefitBlock}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className={styles.benefitLeft}>
              <span className={styles.benefitLabel}>Client Benefit</span>
              <span className={styles.benefitValue}>15%</span>
              <span className={styles.benefitSublabel}>Preferred Rate</span>
            </div>

            <div className={styles.benefitDivider} />

            <div className={styles.benefitRight}>
              <span className={styles.benefitLabel}>Private Access Code</span>
              <motion.button
                className={styles.codeButton}
                onClick={handleCopyCode}
                whileTap={{ scale: 0.97 }}
                aria-label="Copy access code BERKHAM15"
              >
                <motion.span
                  className={styles.code}
                  animate={copied ? {
                    color: ['#f5f5f5', '#d4af37', '#f5f5f5'],
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  BERKHAM15
                </motion.span>
                <span className={styles.copyHint}>
                  {copied ? 'Copied' : 'Click to copy'}
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Level E: Action Footer */}
          <motion.div
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a
              href="https://www.eco-diamant.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitLink}
            >
              Visit Boutique Collection
              <svg
                className={styles.linkArrow}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <p className={styles.signature}>
              Reserved for those who expect rarity, meaning, and excellence.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
