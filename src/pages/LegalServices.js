import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const LegalServices = () => {
  return (
    <>
      <div className="legal-services">
        <Helmet>
          <title>
            Legal Services | Lawyer in Bucharest | Law Firm and Insolvency by Alina Marin
          </title>
          <meta
            name="description"
            content="We provide legal consultation and specialized assistance in a range of practice areas, including civil law, criminal law, enforcement, family law, labor law, commercial and corporate law."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">LEGAL SERVICES</h6>
          <div className="pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Comprehensive Legal Services
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              We offer legal consultation and specialized assistance in a range of practice areas
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="civil card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CIVIL LAW</h6>
                  <p className="card-text mx-1">
                    Legal consultation services, assistance, and representation in court, drafting of legal claims. We help you resolve legal issues quickly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="criminal card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CRIMINAL LAW</h6>
                  <p className="card-text mx-1">
                    Legal assistance and representation before criminal investigation authorities and in court, drafting of appeals and complaints against criminal investigation measures, drafting of rehabilitation requests.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="executare card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ENFORCEMENT</h6>
                  <p className="card-text mx-1">
                    In the field of enforcement, the services offered are regardless of your role in this procedure – debtor or creditor. Inaction can have particularly serious consequences in this area, both for the creditor and the debtor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="family card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    FAMILY LAW - DIVORCE AND ASSET DIVISION
                  </h6>
                  <p className="card-text mx-1">
                    Legal assistance and representation in divorce proceedings, asset division, exercising parental authority, alimony, and child visitation schedules.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="labor card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">LABOR LAW</h6>
                  <p className="card-text mx-1">
                    We provide professional legal services, including drafting appeals against dismissal decisions, disciplinary sanctions, enforcing employers to pay salary-related rights, and preparing legal opinions in labor law.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div className="business card-img-top">
                  <div className="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    COMMERCIAL AND CORPORATE LAW
                  </h6>
                  <p className="card-text mx-1">
                    Incorporation of companies in the Trade Register, change of registered office, establishment/closure of business locations, drafting of constitutive acts, and resolutions of general meetings of shareholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <p className="more-services py-4">
              Other areas of activity where we provide consultation, assistance, and representation in court or before other state institutions: DEBT RECOVERY, PENSIONS AND OTHER SOCIAL SECURITY RIGHTS, HOMEOWNERS ASSOCIATIONS, CONTRAVENTIONAL COMPLAINTS AND FINES, CAR ACCIDENT COMPENSATION, drafting of applications, and any other documents specific to the activity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalServices;