'use client';

import { motion } from 'framer-motion';
import OptimizedImage from '@/components/optimizedImage';
import { destinations } from '@/data';
import styles from './destinations.module.css';

export function Destinations() {
  return (
    <section id="destinations" className={styles.destinations}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Where We Take You
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Top <span className={styles.titleAccent}>Destinations</span>
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={styles.cardImageWrapper}>
                <OptimizedImage
                  src={destination.image}
                  alt={destination.name}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  preloadMargin="500px"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{destination.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
