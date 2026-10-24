import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/images/about12.jfif',
  '/images/about13.jfif',
  '/images/fin2.jfif'
];

export const WhyMotherfarmSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="whychouseus">
      <div className="container">
        <h2 className="text-center" style={{ fontFamily: "'Georgia', serif", fontSize: '28px', fontWeight: 'bold' }}>
          Why Motherfarm ?
        </h2>

        <div className="row justify-content-between align-items-center mt-4">
          <div className="col-lg-5 text-center">
            <div className="carousel slide carousel-fade h-100 carousel-slider" style={{ position: 'relative', minHeight: '320px', borderRadius: '12px', overflow: 'hidden' }}>
              <div className="carousel-inner h-100">
                {carouselImages.map((img, i) => (
                  <div
                    key={i}
                    className={`carousel-item h-100 ${i === activeImageIndex ? 'active' : ''}`}
                    style={{
                      position: i === activeImageIndex ? 'relative' : 'absolute',
                      inset: 0,
                      opacity: i === activeImageIndex ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out'
                    }}
                  >
                    <img
                      className="rounded-3 img-fluid fit-cover h-100 w-100"
                      src={img}
                      alt="Why Motherfarm"
                      style={{ height: '320px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 mt-4 mt-lg-0">
            <h4 style={{ fontWeight: '600', color: '#222831', fontSize: '1.25rem', lineHeight: '1.5' }}>
              Motherfarm delivers pure, farm-fresh pulses and spices for rich flavors, effortlessly for all 🌿✨.
            </h4>
            <p style={{ color: '#555', marginTop: '15px', lineHeight: '1.8', fontSize: '0.95rem' }}>
              we believe in delivering the finest pulses and spices, sourced directly from trusted farms. Our commitment to quality ensures that every product is pure, natural, and free from harmful additives. With a deep-rooted passion for traditional flavors, we bring you ingredients that enhance your cooking with rich aroma and taste. Sustainability is at the heart of what we do, supporting ethical farming practices while preserving the authenticity of our products. We strive to make every meal healthier, tastier, and more wholesome. Choosing Motherfarm means choosing freshness, purity, and a brand that values your trust. Experience the true essence of natural goodness with every bite.
            </p>
          </div>
        </div>

        {/* Watch Our Video */}
        <h2 className="text-center" style={{ fontFamily: "'Georgia', serif", fontSize: '28px', fontWeight: 'bold', marginTop: '45px' }}>
          Watch Our Video
        </h2>

        <div className="col-lg-6 col-md-8 text-center mx-auto mt-4 mb-4">
          <div
            className="position-relative py-5 rounded-3 shadow"
            style={{
              backgroundImage: 'url(/images/47.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setVideoModalOpen(true)}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }} />
            <a className="cursor-pointer" style={{ position: 'relative', zIndex: 2 }}>
              <img src="/images/play-button-svgrepo-com.svg" alt="play" width="60" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            style={{ position: 'relative', width: '100%', maxWidth: '850px', aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: 'white',
                background: 'transparent',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <iframe
              src="https://www.youtube.com/embed/c8aFcHFu8QM?autoplay=1"
              title="Mother Farm India Video"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
