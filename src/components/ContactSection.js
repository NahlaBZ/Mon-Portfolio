import React from "react";

const ContactSection = () => {
    return (
        <section className="contact-section mt-5 mb-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="text-center mb-5">
                        <h3 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Me joindre</span></h3>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h3 className="text-uppercase m-0">Localisation</h3>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">Vitry sur seine</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h3 className="text-uppercase m-0">Email</h3>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><p>Benzidnahla@gmail.com</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Téléphone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50 d-flex justify-content-center">
                                    <img src="../media/france.png" alt="drapeau france" className="drapeau-france" /> <span>6 03 18 92 59 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;