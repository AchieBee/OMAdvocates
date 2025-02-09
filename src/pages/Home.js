import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  //faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            Lawyer in Bucharest | Law and Insolvency Office Alina Marin
          </title>
          <meta
            name="description"
            content="Our Law and Insolvency Office, led by Alina Marin, offers consultancy, assistance, and representation for legal or insolvency matters and debt recovery before courts and public authorities."
          />
        </Helmet>

        {/* HERO SECTION */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">ALINA MARIN</div>
                <div className="text-2 fs-4">
                  LAW AND INSOLVENCY OFFICE
                  <span className="fw-bold">
                    <br></br> Bucharest{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "There is no true justice where there is no fairness, and fairness cannot be found where there is no truth."
                  - <span>Lucius Annaeus Seneca.</span>
                </div>
              </div>

              {/* Horizontal Buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100">
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg type-button p-4 w-100 fw-bold"
                      aria-label="Appointment"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Appointment
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Request an evaluation"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Request an evaluation
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/useful-information">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Fees"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Fees
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Screen Buttons */}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Appointment"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Appointment
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Request an evaluation"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Request an evaluation
                </button>
              </Link>
              <Link to="/useful-information">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Fees"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Fees
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* LEGAL ISSUES SECTION */}
        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                  Are you facing a legal or insolvency issue?
                </h5>

                <p className="text-separator fw-normal">
                  Our Law and Insolvency Office, led by Alina Marin, offers consultancy, assistance, and representation for legal matters, insolvency, and debt recovery before courts and public authorities.
                  <br />
                  <span className="ms-4"></span>We want to stand by your side and find the best solutions for your problems while maintaining your impeccable business image.
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="A gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <div className="services-section">
          <div className="services-overlay"></div>

          <div className="services-content container mt-3">
            <h6 className="guide-text">SERVICES</h6>

            <h5 className="lh-base text-center pb-3">Areas of Practice</h5>
            <div className="row mt-3 gx-3 flex-column flex-md-row">
              <div className="col-md-6">
                <h5 className="color text-center pb-4">Law Office</h5>
                <p className="pt-4 px-2">
                  Legal assistance and representation in commercial law, company formation, civil law, labor law, family law, insolvency procedures, debt recovery, administrative law, etc.
                </p>
                <div className="py-3 text-center">
                  <Link to="/law">
                    <button type="button" className="btn btn-outline-dark mb-4">
                      Learn more...
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <h5 className="color text-center pb-4">Insolvency Office</h5>
                <p className="pt-4 px-2">
                  Services in pre-insolvency stage, mergers and divisions of companies, insolvency, restructuring, judicial reorganization, bankruptcy, judicial and administrative liquidation, debt recovery, asset evaluation, and sales.
                </p>
                <div className="py-3 text-center">
                  <Link to="/insolvency">
                    <button type="button" className="btn btn-outline-dark mb-4">
                      Learn more...
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text">OUR EXPERTISE</h6>
          <h5 className="lh-base text-center pb-4">Why choose us?</h5>
          <ul>
            <li>Extensive experience in the field</li>
            <li>High professionalism and client-oriented approach</li>
            <li>Active involvement in projects and support</li>
            <li>Transparent communication with clients</li>
            <li>Commitment to client satisfaction</li>
            <li>Complete solutions through collaboration with professionals</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
