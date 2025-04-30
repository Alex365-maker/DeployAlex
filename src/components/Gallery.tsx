import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Array<{ src: string; alt: string; placeholder: string }>>([]);
  const [page, setPage] = useState(1);

  const loadMoreImages = () => {
    const newImages = Array.from({ length: 6 }, (_, i) => ({
      src: `https://picsum.photos/800/600?random=${page * 6 + i}`,
      alt: `Random image ${page * 6 + i}`,
      placeholder: `https://picsum.photos/10/10?random=${page * 6 + i}`
    }));
    setImages(prev => [...prev, ...newImages]);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    loadMoreImages();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMoreImages();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="blur"
              placeholderSrc={image.placeholder}
              width="100%"
              height="auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 