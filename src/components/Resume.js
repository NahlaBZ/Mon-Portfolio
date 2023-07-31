import React from 'react';

const Resume = () => {
    return (
        <main className="flex-shrink-0">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Compétences</span></h2>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div className="d-flex justify-content-between mb-4 flex-direction">
                                <h3 className="text-primary fw-bolder mb-0 mt-4">Expériences</h3>


                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">Décembre 2022 - Aujourd'hui</div>
                                                <div className="small fw-bolder">Développeur Web</div>
                                                <div className="small text-muted">Openclassrooms</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Créer la page d'accueil d'une agence de voyage en HTML / CSS</li>
                                                <li className="list-group-item">Créer une page web dynamique avec JavaScript</li>
                                                <li className="list-group-item">Planifier le développement du site d'un client</li>
                                                <li className="list-group-item">Débugger et optimiser le site d'une photographe</li>
                                                <li className="list-group-item">Créer une application web de location immobilière en React</li>
                                                <li className="list-group-item">Développer le back end d'un site de notation de livres</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">Octobre 2019 - Mars 2022</div>
                                                <div className="small fw-bolder">Chef d'équipe de développemnt analytique </div>
                                                <div className="small text-muted">Sanofi</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Manager une équipe de 6 techniciens </li>
                                                <li className="list-group-item">Rédaction des rapports de validation </li>
                                                <li className="list-group-item">Animer des réunions  </li>
                                                <li className="list-group-item">Communiquer l'avancement des projets analytiques </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-secondary fw-bolder mb-4">Formations</h3>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">Décembre 2022 - Aout 2023</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Openclassrooms</div>
                                                    <div className="small text-muted">Paris</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Certification professionnelle (bac+2) </div>
                                                    <div className="small text-muted">Développeur Web</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className='fw-bold'>Construire un site web responsive et dynamique</span> s’adaptant à tout type d’écran.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Créer des API et des bases de données</span> pour développer des sites complets et dynamiques.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Optimiser les performances</span> et réaliser la maintenance de sites web déjà existants.</li>
                                                <li className="list-group-item"><span className='fw-bold'>Gérer un projet web de A à Z :</span> de la planification du projet à la présentation de la solution au client.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-secondary fw-bolder mb-2">Septembre 2017 - Septembre 2019</div>
                                                <div className="mb-2">
                                                    <div className="small fw-bolder">Faculté des sciences de Poitiers </div>
                                                    <div className="small text-muted">Poitiers</div>
                                                </div>
                                                <div className="fst-italic">
                                                    <div className="small text-muted">Bac +5</div>
                                                    <div className="small text-muted">Master chimie analytique </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="pb-5"></div>
                        <section>
                            <div className="mb-0">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Outils Professionnels</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Javascript</div></div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React</div></div>
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NodeJS</div></div>
                                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">ExpressJs</div></div>
                                </div>


                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO</div></div>
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google Analytics</div></div>
                                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Google Search Console</div></div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Figma</div></div>
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Canva</div></div>
                                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Postman</div></div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">VS Code</div></div>
                                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Git</div></div>
                                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Webpack</div></div>
                                </div>
                            </div>


                        </section >
                    </div >
                </div >
            </div >
        </main >
    )
};

export default Resume;