import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      style={{
        ...style,
        backgroundColor: isLoaded ? undefined : "hsl(222 25% 10%)",
      }}
    />
  );
};

export default OptimizedImage;
