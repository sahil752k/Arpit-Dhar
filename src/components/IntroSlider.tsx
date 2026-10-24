import React, { useState, useEffect } from 'react';

const slideImages = [
  '/images/fin1.jfif',
  '/images/fin2.jfif',
  '/images/fin3.jfif'
];

export const IntroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubscribed(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <section id="intro" className="s-intro s-intro--slides">
      {/* Background Slides */}
      <div className="intro-slider">
        {slideImages.map((img, index) => (
          <div
            key={index}
            className={`intro-slider-img ${index === 0 ? 'bg-opacity-40' : ''}`}
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      <div className="grid-overlay">
        <div></div>
      </div>

      <div className="row intro-content">
        <div className="column">
          <div className="intro-content__text">
            <h3>Pulses & Spices</h3>
            <h1>
              Get ready, food lovers! <br />
              We crafted a<br />
              super awesome Brand <br />
              for premium pulses & spices.
            </h1>
          </div>

          <div className="intro-content__bottom">
            <div className="intro-content__notify">
              <button
                type="button"
                className="btn--stroke btn--small modal-trigger"
                onClick={() => setIsModalOpen(true)}
              >
                <a href="#aboutus" onClick={(e) => e.stopPropagation()}>
                  Know More
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 12l-9-9v7h-15v4h15v7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <div className={`modal ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal__inner">
          <span className="modal__close" onClick={() => setIsModalOpen(false)} style={{ cursor: 'pointer' }}></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
          <h3>Sign Up</h3>
          <p>
            Be the first to know about the latest updates and get exclusive offers on our grand opening.
          </p>
          {subscribed ? (
            <p style={{ color: '#45af2f', fontWeight: 'bold' }}>Thank you for subscribing!</p>
          ) : (
            <form id="mc-form" className="group mc-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="EMAIL"
                className="email h-full-width h-text-center h-add-half-bottom"
                id="mc-email"
                placeholder="Email Address"
                required
              />
              <input
                type="submit"
                name="subscribe"
                value="Subscribe"
                className="btn--small h-full-width"
              />
            </form>
          )}
        </div>
      </div>

      {/* Social Links on Slider */}
      <ul className="intro-social">
        <li><a href="#0"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="https://www.instagram.com/mother_farm_india/#" target="_blank" rel="noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a></li>
        <li><a href="#0"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
      </ul>
    </section>
  );
};
