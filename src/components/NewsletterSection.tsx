import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="text-center" id="forms-14" style={{ padding: '60px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="mb-4" style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
              Join the Motherfarm Newsletter
            </h2>
            {submitted ? (
              <p style={{ color: '#28a745', fontWeight: 'bold' }}>Thank you for subscribing to Motherfarm!</p>
            ) : (
              <form className="row justify-content-center" onSubmit={handleSubmit}>
                <div className="col-lg-8 col-md-10">
                  <div className="input-group mb-3">
                    <label className="visually-hidden" htmlFor="Email">Email</label>
                    <input
                      className="form-control bg-white"
                      id="Email"
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ padding: '12px 18px', fontSize: '15px' }}
                    />
                    <span className="input-group-append">
                      <button className="btn btn-success px-4" type="submit" style={{ height: '100%' }}>
                        <span className="fa fa-paper-plane fs-1"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
