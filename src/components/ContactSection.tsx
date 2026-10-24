import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      const text = encodeURIComponent(`Inquiry from: ${email}\n\nMessage:\n${message}`);
      window.open(`https://wa.me/919130931298?text=${text}`, '_blank');
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setEmail('');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section id="contact-2" style={{ padding: '70px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          {/* Left: Contact Info */}
          <div className="col-lg-5 col-md-10 mb-5">
            <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>Contact Us.</h3>
            <p style={{ color: '#666' }}>We are always looking for the next great project.</p>

            <div className="mb-4 mt-4">
              <h5 className="mb-3" style={{ fontWeight: 'bold' }}>Mother Farm</h5>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                Gavhankar Nagar, Civil line,<br />
                Washim, Maharashtra, India, 444505
              </p>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="fas fa-phone text-900 me-2" style={{ color: '#222831' }}></span>
                <a className="fw-semi-bold text-1100" href="tel:+919130931298" style={{ color: '#222831', textDecoration: 'none' }}>
                  9130831298 | 7620022109 | 8275954088
                </a>
              </div>
              <div className="d-flex align-items-center">
                <span className="far fa-envelope text-900 me-2" style={{ color: '#222831' }}></span>
                <a className="fw-semi-bold text-1100" href="mailto:motherfarmtrading@gmail.com" style={{ color: '#222831', textDecoration: 'none' }}>
                  motherfarmtrading@gmail.com
                </a>
              </div>
            </div>

            <hr className="bg-300 opacity-100 my-4" />

            <div className="d-flex flex-wrap" style={{ gap: '15px' }}>
              <a className="text-500" href="https://www.instagram.com/mother_farm_india/#" target="_blank" rel="noreferrer" style={{ color: '#666', textDecoration: 'none' }}>
                <span className="fab fa-instagram"></span> Instagram
              </a>
              <a className="text-500" href="#" style={{ color: '#666', textDecoration: 'none' }}>
                <span className="fab fa-facebook-f"></span> Facebook
              </a>
              <a className="text-500" href="#" style={{ color: '#666', textDecoration: 'none' }}>
                <span className="fab fa-twitter"></span> Twitter
              </a>
              <a className="text-500" href="#" style={{ color: '#666', textDecoration: 'none' }}>
                <span className="fab fa-linkedin-in"></span> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Map & Form */}
          <div className="col-lg-6 col-md-10">
            <h3 style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>Find Us on Map</h3>
            <p style={{ color: '#666' }}>Washim, Maharashtra, India, 444505</p>

            <div className="googlemap shadow-sm rounded-1 my-4" style={{ width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                title="Washim Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://maps.google.com/maps?q=Washim,+Maharashtra,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>

            <div className="marker-content py-3">
              <h5 style={{ fontWeight: 'bold' }}>Drop a line.</h5>
            </div>

            {sent ? (
              <div className="alert alert-success">
                Thank you! Your message has been sent to the Mother Farm team.
              </div>
            ) : (
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '12px' }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={5}
                    name="message"
                    placeholder="Drop us a line"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{ padding: '12px' }}
                  />
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-dark" type="submit" style={{ padding: '12px', background: '#222831' }}>
                    <span className="fas fa-paper-plane me-2"></span> Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
