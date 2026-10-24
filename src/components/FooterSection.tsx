import React from 'react';

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section" style={{ backgroundColor: '#222831', padding: '60px 0 30px 0', color: '#ffffff' }}>
      <div className="container">
        <div className="footer-content text-center mb-4">
          <div className="footer_detail">
            <a href="#" className="footer-logo mb-3 d-inline-block">
              <img src="/images/logod.png" alt="Motherfarm Logo" style={{ maxWidth: '180px', height: 'auto' }} />
            </a>
            <p className="footer-text mt-3 mx-auto" style={{ maxWidth: '750px', color: '#a0aec0', fontSize: '14px', lineHeight: '1.6' }}>
              @{currentYear} MOTHERFARM TRADING. All Rights Reserved.
              MOTHERFARM TRADING is the authorized distributor for products supplied globally.
              State of Supply: Globally | GST No: 27ACCFM1819M1Z0 | FSSAI Number: 11525066000008
            </p>
          </div>
        </div>

        <div className="footer-info text-center pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="footer-text mb-0" style={{ color: '#a0aec0', fontSize: '14px' }}>
            &copy; <span id="displayYear">{currentYear}</span> Crafted By Sahil Kapse
          </p>
        </div>
      </div>
    </footer>
  );
};
