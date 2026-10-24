import React from 'react';

export const ClientSection: React.FC = () => {
  return (
    <section className="client_section layout_padding-bottom" style={{ padding: '50px 0' }}>
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45 text-center mb-5">
          <h2 style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
            What Says Our Customers
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div
              className="box premium-box p-4 rounded shadow-sm"
              style={{
                backgroundColor: '#222831',
                color: '#ffffff',
                borderRadius: '15px',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div className="detail-box">
                <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: '1.6' }}>
                  The purity and rich aroma of Mother Farm’s pulses and spices are truly exceptional. You can tell they are directly harvested without artificial polish.
                </p>
                <h6 style={{ color: '#45af2f', fontWeight: 'bold', fontSize: '18px', marginTop: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Moana Michell
                </h6>
              </div>
              <div className="img-box premium-img-box mt-3 text-end">
                <img
                  src="/images/client1.jpg"
                  alt="Client 1"
                  className="rounded-circle"
                  style={{ width: '65px', height: '65px', objectFit: 'cover', border: '3px solid #ffbe33' }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="box premium-box p-4 rounded shadow-sm"
              style={{
                backgroundColor: '#222831',
                color: '#ffffff',
                borderRadius: '15px',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div className="detail-box">
                <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: '1.6' }}>
                  We regularly source Tur Dal, Cumin and Chia seeds from Motherfarm Trading. Consistency and packaging are unmatched.
                </p>
                <h6 style={{ color: '#45af2f', fontWeight: 'bold', fontSize: '18px', marginTop: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Mike Hamell
                </h6>
              </div>
              <div className="img-box premium-img-box mt-3 text-end">
                <img
                  src="/images/client2.jpg"
                  alt="Client 2"
                  className="rounded-circle"
                  style={{ width: '65px', height: '65px', objectFit: 'cover', border: '3px solid #ffbe33' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
