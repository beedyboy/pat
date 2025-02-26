import React from 'react'

export const Faq = () => {
  return (
   
<div className="our-faqs bg-section">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="our-faqs-content">
                <div className="section-title">
                    <h3 className="wow fadeInUp">frequently asked questions</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Helping you understand healthcare</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.</p>
                    </div>
                    
                <div className="faq-cta-box wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon-box">
                        <img src="images/icon-faq-cta.svg" alt="" />
                    </div>
                    <div className="faq-cta-content">
                        <p>We always take care of your smile</p>
                        <h3>24/7 Emergency</h3>
                        <p><a href="tel:659888589">659-888-589</a></p>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-6"> 
            <div className="faq-accordion" id="faqaccordion"> 
                <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            What should I bring to my first appointment?
                        </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                        </div>
                    </div>
                </div> 
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            How do I schedule an appointment?
                        </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                        </div>
                    </div>
                </div> 
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            What insurance plan do you accept?
                        </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                        </div>
                    </div>
                </div> 
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Can I get a prescription refill without an appointment?
                        </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records</p>
                        </div>
                    </div>
                </div> 
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                            What should I expect during my first visit?
                        </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                        </div>
                    </div>
                </div> 
                <div className="accordion-item wow fadeInUp"  data-wow-delay="1s">
                    <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            How are treatment plans customized for individual needs?
                        </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                            <p>Yes, you can conveniently request prescription refills through our user-friendly online portal or mobile app.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
