import React from "react";

const About = () => {
    return (
        <section className="bg-light">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center my-5">
                            <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">A propos de moi</span></h2>
                            <p className="lead fw-light mb-4"> <strong> Développeuse Web </strong> </p>
                            <p className="text-muted">Reconvertie dans le numérique depuis 2021, j’ai commencé à m’auto-former sur les langages <strong> HTML et CSS </strong>. En 2022, j’ai intégré Openclassroms pour une formation de 8 mois au cours de laquelle j’ai pu consolider mes acquis et travailler sur d’autres domaines <strong>( JavaScript, ReactJS et NodeJS...)</strong><br /></p>
                            <div className="d-flex justify-content-center fs-2 gap-4">

                                <a className="text-gradient icone-reseaux" href="https://www.linkedin.com/in/NAHLA-BENZID/" target="_blank" title="linkedin"><i className="bi bi-linkedin"></i></a>
                                <a className="text-gradient icone-reseaux" href="https://github.com/NahlaBZ" target="_blank" title="github"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;