import React from "react";

const OurHealth = () => {
  return (
    <div className="our-health">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">our numbers</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Health is wealth, and the medical field
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.25s">
                Excellence in healthcare is our standard, and our numbers back
                it up. From patient satisfaction rates to successful treatment
                outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="our-health-boxes">
              <div className="our-health-item health-box-1">
                <div className="health-item-content">
                  <img src="images/icon-health-item-1.svg" alt="" />
                  <h3>Your Health, Our Priority in Wellcare</h3>
                  <a href="#" className="btn-default">
                    read more
                  </a>
                </div>
                <div className="health-item-image">
                  <img src="images/health-item-img-1.png" alt="" />
                </div>
              </div>
              <div className="our-health-image health-box-2">
                <figure className="image-anime reveal">
                  <img src="images/health-item-img-2.jpg" alt="" />
                </figure>
              </div>
              <div className="our-health-image health-box-3">
                <figure className="image-anime reveal">
                  <img src="images/health-item-img-3.jpg" alt="" />
                </figure>
              </div>
              <div className="our-health-item health-box-4">
                <div className="health-item-content">
                  <img src="images/icon-health-item-2.svg" alt="" />
                  <h3>
                    <span className="counter">58</span>M+ Happy Clients
                  </h3>
                </div>
                <div className="happy-client-images">
                  <div className="happy-client-img">
                    <figure className="image-anime reveal">
                      <img src="images/happy-client-img-1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="happy-client-img">
                    <figure className="image-anime reveal">
                      <img src="images/happy-client-img-2.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="happy-client-img">
                    <figure className="image-anime reveal">
                      <img src="images/happy-client-img-3.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="happy-client-img">
                    <figure className="image-anime reveal">
                      <img src="images/happy-client-img-4.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="happy-client-img add-more">
                    <figure>
                      <a href="#">
                        <i className="fa-solid fa-plus"></i>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="our-health-item health-box-5">
                <div className="health-item-content">
                  <h3>Healing Starts Here Caring for You Always</h3>
                  <a href="#" className="learn-btn">
                    learn more
                  </a>
                </div>
                <div className="health-item-image">
                  <img src="images/health-item-img-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHealth;
