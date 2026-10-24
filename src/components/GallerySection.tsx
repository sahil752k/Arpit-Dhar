import React, { useState } from 'react';

const galleryImages = [
  { src: '/images/47.jpg', title: 'Lush Organic Farmlands' },
  { src: '/images/11.jpg', title: 'Traditional Farming Care' },
  { src: '/images/45.jpg', title: 'Sun-Drying Fresh Pulses' },
  { src: '/images/6.jpg', title: 'Harvested Whole Spices' },
  { src: '/images/7.jpg', title: 'Organic Field Ripening' },
  { src: '/images/8.jpg', title: 'Hygienic Grain Sorting' },
  { src: '/images/10.jpg', title: 'Bumper Crop Harvest' },
  { src: '/images/12.jpg', title: 'Prismatic Seed Storage' },
  { src: '/images/60.jpg', title: 'Farm Fresh Heritage' }
];

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="text-center" id="gallery-3" style={{ padding: '60px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-5" style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
              Our Gallery
            </h2>

            <div className="row g-3 mt-3" id="image_gallery">
              {galleryImages.map((item, index) => (
                <div key={index} className="col-4 col-sm-6 col-lg-4 px-2">
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      height: '240px',
                      background: '#f5f5f5'
                    }}
                    onClick={() => setActiveImage(item.src)}
                  >
                    <img
                      className="rounded img-fluid w-100 h-100"
                      src={item.src}
                      alt={item.title}
                      style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveImage(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: 'white',
                background: 'transparent',
                border: 'none',
                fontSize: '32px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <img
              src={activeImage}
              alt="Preview"
              style={{ maxHeight: '80vh', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
