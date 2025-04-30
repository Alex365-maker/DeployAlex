import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home: React.FC = () => {
  const images = [
    {
      src: 'https://picsum.photos/800/600?random=1',
      alt: 'Random image 1',
      placeholder: 'https://picsum.photos/10/10?random=1'
    },
    {
      src: 'https://picsum.photos/800/600?random=2',
      alt: 'Random image 2',
      placeholder: 'https://picsum.photos/10/10?random=2'
    },
    {
      src: 'https://picsum.photos/800/600?random=3',
      alt: 'Random image 3',
      placeholder: 'https://picsum.photos/10/10?random=3'
    }
  ];

  return (
    <div className="home">
      <h1>Welcome to Lazy Loading Demo</h1>
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
      <Link to="/gallery" className="gallery-link">
        View Full Gallery
      </Link>
    </div>
  );
};

export default Home; 