'use client';

import { motion } from 'framer-motion';
import OptimizedImage from '@/components/optimizedImage';
import { partners } from '@/data';
import styles from './partners.module.css';

export function Partners() {
  // Duplicate partners array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={styles.partners} id='partners'>
      <div className={styles.container}>
        {/* <div className={styles.header}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
             Working With  <span className={styles.titleAccent}>The Best</span>
          </motion.h2>
        </div> */}

        <motion.div
          className={styles.carouselWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.5 }}
        >
          <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className={styles.logoWrapper}
                >
                  <OptimizedImage
                    src={partner.logo}
                    alt={partner.name}
                    width={400}
                    height={370}
                    preloadMargin="400px"
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
