'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import styles from './optimizedImage.module.css';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  preloadMargin?: string;
  animationDuration?: number;
  showPlaceholder?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  quality = 80,
  sizes,
  priority = false,
  className = '',
  preloadMargin = '300px',
  animationDuration = 0.6,
  showPlaceholder = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(() => priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: preloadMargin,
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, preloadMargin, shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const isFillMode = fill === true;
  const containerStyle = isFillMode
    ? { position: 'absolute' as const, inset: 0 }
    : { width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height, position: 'relative' as const };

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={containerStyle}
    >
      {showPlaceholder && !isLoaded && (
        <div className={styles.placeholder} />
      )}

      {shouldLoad && (
        <motion.div
          className={isFillMode ? styles.imageWrapper : styles.imageWrapperRelative}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{
            duration: animationDuration,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill={fill}
            width={!isFillMode ? width : undefined}
            height={!isFillMode ? height : undefined}
            quality={quality}
            sizes={sizes}
            priority={priority}
            onLoad={handleLoad}
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
}
