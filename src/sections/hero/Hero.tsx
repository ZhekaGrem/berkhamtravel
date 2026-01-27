'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './hero.module.css';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(prev => {
        if (prev !== newIsMobile) {
          setVideoLoaded(false);
        }
        return newIsMobile;
      });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('canplaythrough', handleCanPlay);

    const timer = setTimeout(() => {
      video.load();
    }, 100);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <section className={styles.hero}>
      {/* Video/Image Background */}
      <div className={styles.mediaWrapper}>
        {/* Hero image - always visible first for LCP */}
        <Image
          src={isMobile ? '/hero-mobile.webp' : '/hero-desktop.webp'}
          alt="Luxury travel"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className={`${styles.fallbackImage} ${videoLoaded ? styles.hidden : ''}`}
        />
        {/* Video loads after image */}
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          ref={videoRef}
          className={`${styles.video} ${videoLoaded ? styles.visible : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={isMobile ? '/hero-mobile.webp' : '/hero-desktop.webp'}
        >
          <source
            src={isMobile ? '/video/phone.mp4' : '/video/desktop.mp4'}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
     {/* <div className={styles.content}>
         <motion.span
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where travel meets elegance
        </motion.span> */}

        {/* <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className={styles.titleFirst}>Berkham</span>
          <br />
          <span className={styles.titleAccent}>Private Travel </span>
          <span className={styles.titleAccent}> & </span>
          <span className={styles.titleAccent}>Concierge</span>
        </motion.h1> */}

        {/* <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Where Travel Meets Elegance 
        </motion.p> */}

        {/* <motion.div
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
      </div>*/}


    </section>
  );
}
