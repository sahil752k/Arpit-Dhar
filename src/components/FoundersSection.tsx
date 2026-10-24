import React from 'react';

export const FoundersSection: React.FC = () => {
  return (
    <section className="text-center" id="team-3" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h2 className="mb-3" style={{ fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>
              Our Founders
            </h2>
            <p className="lead" style={{ fontStyle: 'italic', color: '#555' }}>
              &ldquo;Our founders are driven by a passion for innovation, committed to transforming the way of pulses &amp; spices market in the future.&rdquo;
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-11 border border-200 bg-100 rounded-3" style={{ background: '#f8f9fa', borderRadius: '15px', border: '1px solid #e9ecef' }}>
            <div className="row">
              <div className="col-sm-6 col-md-4 py-5">
                <img
                  className="rounded-circle shadow-sm"
                  src="/images/mahesh.jpeg"
                  alt="Mahesh Ithape"
                  width="120"
                  height="120"
                  style={{ objectFit: 'cover' }}
                />
                <h4 className="mt-3 mb-2" style={{ fontWeight: '600', color: '#222831' }}>Mahesh Ithape</h4>
              </div>

              <div className="col-sm-6 col-md-4 py-5">
                <img
                  className="rounded-circle shadow-sm"
                  src="/images/dumb.jpg"
                  alt="Akash Alone"
                  width="120"
                  height="120"
                  style={{ objectFit: 'cover' }}
                />
                <h4 className="mt-3 mb-2" style={{ fontWeight: '600', color: '#222831' }}>Akash Alone</h4>
              </div>

              <div className="col-sm-6 col-md-4 py-5">
                <img
                  className="rounded-circle shadow-sm"
                  src="/images/varun.jpeg"
                  alt="Varun Olokar"
                  width="120"
                  height="120"
                  style={{ objectFit: 'cover' }}
                />
                <h4 className="mt-3 mb-2" style={{ fontWeight: '600', color: '#222831' }}>Varun Olokar</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
