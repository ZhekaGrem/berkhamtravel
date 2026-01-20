'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { partners } from '@/data';
import styles from './partners.module.css';

export function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Working With The Best
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted <span className={styles.titleAccent}>Partners</span>
          </motion.h2>
        </div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className={styles.logoWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={400}
                height={170}
                className={styles.logo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
