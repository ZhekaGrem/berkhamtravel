'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/optimizedImage';
import { eventsData } from '@/data';
import styles from './exclusiveEvent.module.css';

// Background images for each category (replace with your own images)
const categoryBackgrounds: Record<string, string> = {
  sporting: '/exclusiveEvent/sport.jpg',
  entertainment: '/exclusiveEvent/2.jpg',
  redCarpet: '/exclusiveEvent/3.jpg',
};

export function ExclusiveEvent() {
  // Mobile: all categories open by default, can toggle individually
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set(['sporting', 'entertainment', 'redCarpet'])
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="events" className={styles.events}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Access Matters
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Exclusive <span className={styles.titleAccent}>Event Access</span>
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Priority access to the world&apos;s most sought-after events
          </motion.p>
        </div>

        {/* Desktop 3-Column Layout */}
        <div className={styles.gridDesktop}>
          {eventsData.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className={styles.column}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Background Image */}
              <div className={styles.columnBackground}>
                <OptimizedImage
                  src={categoryBackgrounds[category.id] || '/exclusiveEvent/3.jpg'}
                  alt=""
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  preloadMargin="400px"
                />
              </div>
              <div className={styles.columnOverlay} />

              {/* Content */}
              <div className={styles.columnContent}>
                <h3 className={styles.columnTitle}>{category.title}</h3>
                <ul className={styles.eventList}>
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className={styles.eventItem}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.03 }}
                    >
                      <span className={styles.eventBullet} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className={styles.accordionMobile}>
          {eventsData.map((category) => (
            <div key={category.id} className={styles.accordionItem}>
              {/* Background Image */}
              <div className={styles.accordionBackground}>
                <OptimizedImage
                  src={categoryBackgrounds[category.id] || '/exclusiveEvent/3.jpg' }
                  alt=""
                  fill
                  quality={60}
                  sizes="100vw"
                  preloadMargin="300px"
                />
              </div>
              <div className={styles.accordionOverlay} />

              <button
                className={`${styles.accordionHeader} ${openCategories.has(category.id) ? styles.accordionHeaderOpen : ''}`}
                onClick={() => toggleCategory(category.id)}
                aria-expanded={openCategories.has(category.id)}
              >
                <span className={styles.accordionTitle}>{category.title}</span>
                <motion.span
                  className={styles.accordionIcon}
                  animate={{ rotate: openCategories.has(category.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg> */}
                </motion.span>
              </button>

              <AnimatePresence>
                {openCategories.has(category.id) && (
                  <motion.div
                    className={styles.accordionContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ul className={styles.mobileEventList}>
                      {category.items.map((item, index) => (
                        <motion.li
                          key={item}
                          className={styles.mobileEventItem}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <span className={styles.mobileEventBullet} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
