import React from 'react'

export const Footer = () => {
  return (
    
    <footer className="main-footer bg-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12"> 
                    <div className="about-footer"> 
                        <div className="footer-logo">
                            <img src="images/footer-logo.svg" alt="" />
                        </div> 
                        <div className="about-footer-content">
                            <p>We offer a wide range of healthcare services to meet your needs.</p>
                        </div>            
                    </div> 
                </div>
                
                <div className="col-lg-2 col-md-4 col-6"> 
                    <div className="footer-links">
                        <h3>healthcare</h3>
                        <ul>
                            <li><a href="doctors.html">doctors</a></li>
                            <li><a href="#">diagnostics</a></li>
                            <li><a href="#">caregiver</a></li>
                            <li><a href="#">hospitality</a></li>
                            <li><a href="#">emergency</a></li>
                        </ul>
                    </div> 
                </div>
                
                <div className="col-lg-2 col-md-4 col-6"> 
                    <div className="footer-links">
                        <h3>quick links</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="faqs.html">faqs</a></li>
                            <li><a href="blog.html">blogs</a></li>
                            <li><a href="projects.html">facilities</a></li>
                        </ul>
                    </div> 
                </div>

                <div className="col-lg-3 col-md-4"> 
                    <div className="footer-contact-box footer-links">
                        <h3>contact us</h3>
                         
                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <img src="images/icon-mail.svg" alt="" />
                            </div>
                            <div className="footer-contact-content">
                                <p>info@domain.com</p>
                            </div>
                          </div>
                          
                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <img src="images/icon-phone.svg" alt="" />
                            </div>
                            <div className="footer-contact-content">
                                <p>+1 (213) 465 789</p>
                            </div>
                          </div>
                          
                        <div className="footer-contact-item">
                            <div className="icon-box">
                                <img src="images/icon-location.svg" alt="" />
                            </div>
                            <div className="footer-contact-content">
                                <p>2464 Royal Ln. Mesa, New Jersey</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="footer-social-link">
                        <hr />
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="footer-copyright-text">
                            <p>Copyright © 2024 All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="footer-terms-condition">
                            <ul>
                                <li><a href="#">privacy policy</a> </li>
                                <li><a href="#">terms & conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
