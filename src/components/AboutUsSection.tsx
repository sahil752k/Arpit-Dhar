import React from 'react';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="aboutus">
      <section className="bg-1100" id="content-4">
        <div className="container">
          <div className="row flex-center">
            <div className="col-lg-7 col-xl-8 pe-md-8">
              <h2
                className="text-center"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Who We are
              </h2>
              <h6 className="fs-0 mb-4 text-white">
                <b></b>
              </h6>
              <p className="dropcap text-400">
                At MotherFarm, we are passionate about bringing you the finest quality pulses and spices. Sourced from trusted farms, our products are carefully selected to ensure purity, freshness, and rich flavors.
              </p>
              <p className="text-400">
                We believe in preserving traditional tastes while meeting modern quality standards. Our mission is to provide natural, chemical-free ingredients that enhance your cooking experience. Whether it&apos;s lentils, beans, or aromatic spices, every product is crafted to add authenticity to your meals.
              </p>
              <p className="text-400">
                With a commitment to quality and customer satisfaction, we make sure you get the best farm-to-Home experience. Discover the essence of purity and flavor with us! Your taste, our promise! 🌿✨
              </p>
              <p className="text-400">
                Ready to elevate your cooking with our premium pulses and spices, Experience unmatched quality, rich flavors, and purity in every pack. 🌿✨
              </p>
            </div>

            <div className="col-lg-5 col-xl-4 ms-auto mt-5 mt-lg-0">
              <div className="row g-2">
                <div className="col-7">
                  <img className="img-fluid rounded" src="/images/about12.jfif" alt="About Mother Farm" />
                </div>
                <div className="col-5">
                  <img className="img-fluid rounded" src="/images/about13.jfif" alt="Mother Farm Spices" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
