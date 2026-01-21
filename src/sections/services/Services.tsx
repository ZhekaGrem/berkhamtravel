'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/optimizedImage';
import { servicesData } from '@/data';
import styles from './services.module.css';

const luxurySpring = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  mass: 1.2,
};

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <motion.span
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our <span className={styles.titleAccent}>Services</span>
        </motion.h2>
      </div>

      {servicesData.map((category, categoryIndex) => (
        <ServiceCategory
          key={category.id}
          category={category}
          index={categoryIndex}
        />
      ))}
    </section>
  );
}

interface ServiceCategoryProps {
  category: typeof servicesData[0];
  index: number;
}

function ServiceCategory({ category, index }: ServiceCategoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(index === 0);

  return (
    <motion.div
      className={styles.category}
      data-title={category.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Category Header (Mobile Toggle) */}
      <button
        className={styles.categoryHeader}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-expanded={isMobileOpen}
      >
        <h3 className={styles.categoryTitle}>{category.title}</h3>
        <motion.span
          className={styles.categoryToggle}
          animate={{ rotate: isMobileOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      {/* Desktop Horizontal Accordion */}
      <div className={styles.accordionDesktop}>
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={item.id}
            className={`${styles.card} ${activeIndex === itemIndex ? styles.cardActive : ''}`}
            onMouseEnter={() => setActiveIndex(itemIndex)}
            animate={{
              flex: activeIndex === itemIndex ? 3 : 1,
            }}
            transition={luxurySpring}
          >
            {/* Background Image */}
            <div className={styles.cardImageWrapper}>
              <OptimizedImage
                src={item.image}
                alt={item.title}
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 33vw"
                preloadMargin="400px"
                className={styles.cardImage}
              />
              <motion.div
                className={styles.cardOverlay}
                animate={{
                  opacity: activeIndex === itemIndex ? 0.5 : 0.7,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              {/* <motion.span
                className={styles.cardNumber}
                animate={{
                  opacity: activeIndex === itemIndex ? 1 : 0.5,
                }}
              >
                {String(itemIndex + 1).padStart(2, '0')}
              </motion.span> */}

              <h4 className={styles.cardTitle}>{item.title}</h4>

              <AnimatePresence>
                {activeIndex === itemIndex && (
                  <motion.p
                    className={styles.cardDescription}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical Accordion */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.accordionMobile}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={item.id}
                className={styles.mobileCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: itemIndex * 0.05 }}
              >
                <div className={styles.mobileCardImageWrapper}>
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={80}
                    sizes="100vw"
                    preloadMargin="300px"
                    className={styles.cardImage}
                  />
                  <div className={styles.mobileCardOverlay} />
                </div>
                <div className={styles.mobileCardContent}>
                  <h4 className={styles.mobileCardTitle}>{item.title}</h4>
                  <p className={styles.mobileCardDescription}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
