import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image me-1"
                  alt="Scales of justice logo"
                  width="50"
                  height="50"
                />
                <img
                  src="/assets/component.png"
                  className="img-fluid px-0 logo-text"
                  alt="Alina Marin Law Firm and Insolvency"
                  width="150"
                  height="100"
                />
              </span>
              <p className="content pt-3 px-3">
                Our law firm and insolvency office can guide you through legal and financial challenges.
                We are dedicated to protecting your interests and providing tailored solutions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">Contact</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="av_alinamarin@yahoo.com"
                  />
                  <span className="fw-light px-2">av_alinamarin@yahoo.com</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+40 769 935 716"
                  />
                  <span className="px-2 fw-light">+40 (769) 935 716</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Bucharest, Romania"
                  />
                  <span className="px-2 fw-light">Bucharest, ROMANIA</span>
                </span>
              </div>
            </div>

            {/* Office Hours Section */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Office Hours</h6>
                <p className="fw-light">
                  Monday – Friday: 9AM – 5PM <br /> Saturday – Sunday: Closed
                </p>
                <a href="/sitemap.xml" className="">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+40769935716"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="Law Firm and Insolvency"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Hello,
                <br />
                <br /> How can we assist you today?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>

        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2024 Lawyer Alina Marin</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
