"use client";

import Image from "next/image";
import { useState } from "react";

export default function PublicNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9">
              <div className="topbar-contact-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-clock"></i>{" "}
                      <span>Working Hour:</span> 08:00am to 09:00pm
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-envelope"></i>{" "}
                      <span>Email:</span> info@patsync.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-3">
              <div className="topbar-social-details">
                <div className="topbar-social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="topbar-contact-info topbar-contact-details">
                  <ul>
                    <li>
                      <a href="#">
                        <span>Contact:</span> +123 (456) 789
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="./">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                />

                {/* <img src="images/logo.svg" alt="Logo" /> */}
              </a>

              <button
                className="navbar-toggler"
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <a className="nav-link" href="./">
                        Home
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="index.html">
                            Home - Main
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-image.html">
                            Home - Image
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-video.html">
                            Home - Video
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-slider.html">
                            Home - Slider
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="services.html">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Pages
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="service-single.html">
                            Service Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-single.html">
                            Blog Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="doctors.html">
                            Doctors
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="doctor-single.html">
                            Doctor Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="case-study.html">
                            Case Study
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="case-study-single.html">
                            Case Study Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="image-gallery.html">
                            Image Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="video-gallery.html">
                            Video Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="faqs.html">
                            FAQs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item highlighted-menu">
                      <a className="nav-link" href="book-appointment.html">
                        book appointment
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="header-btn">
                  <a href="book-appointment.html" className="btn-default">
                    book appointment
                  </a>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
}
