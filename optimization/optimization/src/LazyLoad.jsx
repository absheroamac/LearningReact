import { useEffect, useRef } from "react";

export const LazyLoad = ({ placeholder, src }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);
  return <img ref={imgRef} src={placeholder} alt="Image" />;
};
