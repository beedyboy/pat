"use client";

import { useState } from "react";
import { Faq } from "@/components/website/faq";
import { OurTeam } from "@/components/website/team";
import OurHealth from "@/components/website/our-health";
import { Testimony } from "@/components/website/testimony";

export default function Page() {

  return (
    <>
      <div className="hero hero-bg-image hero-slider-layout bg-section">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-slide">
                <div className="hero-slider-image">
                  <img src="images/hero-bg.jpg" alt="" />
                </div>

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <div className="section-title dark-section">
                          <h3 className="wow fadeInUp">
                            your health our priority
                          </h3>
                          <h1
                            className="text-anime-style-3"
                            data-cursor="-opaque"
                          >
                            Expert medical care you can rely on
                          </h1>
                          <p className="wow fadeInUp" data-wow-delay="0.2s">
                            Experience healthcare you can trust. Our dedicated
                            team provides compassionate, high-quality care.
                          </p>
                        </div>

                        <div
                          className="hero-btn wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <a
                            href="book-appointment.html"
                            className="btn-default"
                          >
                            book a appointment
                          </a>
                          <a href="about.html" className="btn-default">
                            about us
                          </a>
                        </div>

                        <div
                          className="google-rating wow fadeInUp"
                          data-wow-delay="0.75s"
                        >
                          <ul>
                            <li>
                              Google Rating <span>5.0</span>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>based on 500 reviews</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-slide">
                <div className="hero-slider-image">
                  <img src="images/hero-bg-2.jpg" alt="" />
                </div>

                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <div className="section-title dark-section">
                          <h3 className="wow fadeInUp">
                            your health our priority
                          </h3>
                          <h1
                            className="text-anime-style-3"
                            data-cursor="-opaque"
                          >
                            Expert medical care you can rely on
                          </h1>
                          <p className="wow fadeInUp" data-wow-delay="0.2s">
                            Experience healthcare you can trust. Our dedicated
                            team provides compassionate, high-quality care.
                          </p>
                        </div>
                        <div
                          className="hero-btn wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <a
                            href="book-appointment.html"
                            className="btn-default"
                          >
                            book a appointment
                          </a>
                          <a href="about.html" className="btn-default">
                            about us
                          </a>
                        </div>
                        <div
                          className="google-rating wow fadeInUp"
                          data-wow-delay="0.75s"
                        >
                          <ul>
                            <li>
                              Google Rating <span>5.0</span>
                            </li>
                            <li>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </li>
                            <li>based on 500 reviews</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-pagination"></div>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Professionals dedicated to your health
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    Our team of skilled professionals is committed to providing
                    personalized, compassionate care. With a focus.
                  </p>
                </div>

                <div className="about-us-body">
                  <div className="about-info-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="images/icon-about-info-1.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>patient-centered care</h3>
                      <p>
                        Putting you at the heart of everything we do. Our
                        patient-centered approach ensures personalized.
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-info-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-about-info-2.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>specialist doctors</h3>
                      <p>
                        Putting you at the heart of everything we do. Our
                        patient-centered approach ensures personalized.
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-info-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-about-info-3.svg" alt="" />
                    </div>
                    <div className="about-info-item-content">
                      <h3>24 hours service</h3>
                      <p>
                        Putting you at the heart of everything we do. Our
                        patient-centered approach ensures personalized.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="about-us-btn wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <a href="about.html" className="btn-default">
                    view more about us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-us-images">
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="images/about-img-1.jpg" alt="" />
                  </figure>
                </div>

                <div className="about-img-2">
                  <figure className="image-anime">
                    <img src="images/about-img-2.jpg" alt="" />
                    <h3>video call support</h3>
                  </figure>
                </div>
                <div className="company-timing">
                  <h3>Opening hours</h3>
                  <ul>
                    <li>
                      <span>Mon To Fri</span> 09:30 - 07:30
                    </li>
                    <li>
                      <span>Saturday</span> 10:30 - 5:00
                    </li>
                    <li>
                      <span>Sunday</span> Closed
                    </li>
                  </ul>

                  <figure>
                    <i className="fa-solid fa-clock"></i>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-services bg-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Comprehensive services for your health
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="service-header">
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="images/icon-service-1.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>urology</h3>
                    </div>
                  </div>
                  <div className="service-readmore">
                    <a href="service-single.html">
                      <img src="images/arrow-dark.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="service-body">
                  <p>
                    Our neurology department provides expert care for conditions
                    affecting the brain, spine, and nervous system
                  </p>
                </div>
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-img-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="service-header">
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="images/icon-service-2.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>neurology</h3>
                    </div>
                  </div>
                  <div className="service-readmore">
                    <a href="service-single.html">
                      <img src="images/arrow-dark.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="service-body">
                  <p>
                    Our neurology department provides expert care for conditions
                    affecting the brain, spine, and nervous system
                  </p>
                </div>
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-img-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-header">
                  <div className="service-item-box">
                    <div className="icon-box">
                      <img src="images/icon-service-3.svg" alt="" />
                    </div>
                    <div className="service-item-content">
                      <h3>eye care</h3>
                    </div>
                  </div>

                  <div className="service-readmore">
                    <a href="service-single.html">
                      <img src="images/arrow-dark.svg" alt="" />
                    </a>
                  </div>
                </div>

                <div className="service-body">
                  <p>
                    Our neurology department provides expert care for conditions
                    affecting the brain, spine, and nervous system
                  </p>
                </div>
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/service-img-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="more-service-content">
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  From preventive care to specialized treatments, our wide range
                  of services is designed to support your health at every stage.
                </p>
                <a
                  href="services.html"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  view all services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-video">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Why patients trust us with their care
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  Our commitment to excellence, compassion, and personalized
                  treatment has earned the trust of countless patients. Discover
                  what sets our care apart. Discover what sets our care apart.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="why-choose-list wow fadeInUp">
                <ul>
                  <li>We offer flexible hours to fit your busy schedule.</li>
                  <li>Team is committed to making you feel comfortable.</li>
                  <li>We ensure you receive prompt and effective care.</li>
                  <li>
                    Helping you manage your health at every stage of life.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-video-box">
                <div className="intro-video-image">
                  <figure>
                    <img src="images/intro-video-bg.jpg" alt="" />
                  </figure>
                </div>
                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <img src="images/icon-play.svg" alt="" />
                  </a>
                </div>

                <div className="why-choose-box">
                  <div className="why-choose-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="images/icon-why-choose-1.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>50+ Expert Doctor</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>

                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-why-choose-2.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>24/7 Instant Support</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-box">
                      <img src="images/icon-why-choose-3.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Expert Medical Team</h3>
                      <p>Our team includes over 50 highly skilled doctors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="we-work bg-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">how we work</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  We work to achieve better health outcomes
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are committed to improving health outcomes through
                  personalized care, innovative treatments, and a focus on
                  prevention.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="work-steps-box">
                <div className="work-step-item">
                  <div className="work-step-image">
                    <figure className="image-anime">
                      <img src="images/work-step-img-1.jpg" alt="" />
                    </figure>

                    <div className="work-step-no">
                      <h3>01</h3>
                    </div>
                  </div>
                  <div className="work-step-content">
                    <h3>Create Account</h3>
                    <p>Join our community by creating an account today.</p>
                  </div>
                </div>
                <div className="work-step-item">
                  <div className="work-step-image">
                    <figure className="image-anime">
                      <img src="images/work-step-img-2.jpg" alt="" />
                    </figure>

                    <div className="work-step-no">
                      <h3>02</h3>
                    </div>
                  </div>
                  <div className="work-step-content">
                    <h3>search doctor</h3>
                    <p>Join our community by creating an account today.</p>
                  </div>
                </div>
                <div className="work-step-item">
                  <div className="work-step-image">
                    <figure className="image-anime">
                      <img src="images/work-step-img-3.jpg" alt="" />
                    </figure>

                    <div className="work-step-no">
                      <h3>03</h3>
                    </div>
                  </div>
                  <div className="work-step-content">
                    <h3>schedule appointment</h3>
                    <p>Join our community by creating an account today.</p>
                  </div>
                </div>

                <div className="work-step-item">
                  <div className="work-step-image">
                    <figure className="image-anime">
                      <img src="images/work-step-img-4.jpg" alt="" />
                    </figure>

                    <div className="work-step-no">
                      <h3>04</h3>
                    </div>
                  </div>
                  <div className="work-step-content">
                    <h3>start consultation</h3>
                    <p>Join our community by creating an account today.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-excellence">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our numbers</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  By the numbers: excellence in health
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
              <div className="excellence-counter-boxes">
                <div className="excellence-counter-item">
                  <h2>
                    <span className="counter">85</span>%
                  </h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
                <div className="excellence-counter-item">
                  <h2>
                    <span className="counter">72</span>%
                  </h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>

                <div className="excellence-counter-item">
                  <h2>
                    <span className="counter">95</span>%
                  </h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>

                <div className="excellence-counter-item">
                  <h2>
                    <span className="counter">76</span>%
                  </h2>
                  <p>Of our members start with moderate to serve symptom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq />
      <OurTeam />
      <OurHealth />

      <div className="cta-section bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-6 order-lg-1 order-md-1 order-2">
              <div className="cta-img-1">
                <img src="images/cta-img-1.png" alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 order-lg-2 order-md-2 order-1">
              <div className="cta-box-content">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Take the first step to better health
                  </h2>
                </div>

                <div
                  className="cta-box-btn wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <a href="book-appointment.html" className="btn-default">
                    Book a appointment now
                  </a>
                </div>
                <div
                  className="cta-box-text wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <p>
                    It only <span>takes 2 minutes</span> to complete
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-6 order-lg-3 order-md-3 order-3">
              <div className="cta-img-2">
                <img src="images/cta-img-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
          </div>
    <Testimony />
    </>
  );
}
