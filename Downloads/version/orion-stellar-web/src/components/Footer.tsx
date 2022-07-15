export default function Footer() {
    return (
        <>
            <div className="container">
                {/* <div className="footer-wrap"></div> */}
                <div className="footer">
                    <div className="footer-contents">
                        <div className="form">
                            <h2>Accelerating Enterprise Digitalization</h2>
                            <p>
                                Get Exclusive <span>Digitalization Technology</span> updates straight to your inbox
                            </p>
                            <input type="text" name="email" id="email" placeholder="Email address" />
                        </div>
                        <div className="link-group">
                            <h5>About Us</h5>
                            <div className="link-list">
                                <a href="/about-us#company">Our Company</a>
                                <a href="/about-us#brand">Our Brand</a>
                                <a href="/about-us#mtp">Our MTP</a>
                                <a href="/about-us#co-value">Our Corporate Value</a>
                                {/* <a href="/about-us#stands">What do we stand for</a> */}
                                {/* <a href="/about-us#key-deliverables">Our Key Deliverables</a> */}
                                <a href="/about-us#leaders">Our Leadership Team</a>
                                <a href="/about-us#team">Our Team</a>
                                {/* <a href="/about-us#more">Learn more about<br/>OrionSteallar</a> */}
                            </div>
                        </div>
                        <div className="link-group">
                            <h5>Our Services</h5>
                            <div className="link-list">
                                <a href="/services">Enterprise</a>
                                <a href="/services#start-up">Start Ups</a>
                                {/* <a href="/services#">More Services</a> */}
                                <a href="/services#Deliverables">
                                    Deliverables
                                </a>
                            </div>
                        </div>
                        <div className="link-group">
                            <h5>Contact Us</h5>
                            <div className="link-list">
                                <a href="/contact">Service Support</a>
                                <a href="/contact#sales">
                                    Sales & Business
                                    <br />
                                    Inquiries
                                </a>
                                <a href="/contact#findus">Find us</a>
                                <a href="/contact#findus">Come to see Us</a>
                            </div>
                        </div>
                        <div className="top-social-links">
                            <a href="https://www.linkedin.com/">
                                <img src="/images/social/LinkedIn/Negative.svg" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="end">
                        <div className="copyright">
                            <h6>Copyright © 2021 OrionStealler. All rights reserved.</h6>
                            <h6>Concept and Design By Pomegranate Design Labs.</h6>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/">
                                <img src="/images/social/LinkedIn/Negative.svg" alt="LinkedIn" />
                            </a>
                        </div>
                        <div className="tnc-links">
                            <a href="">
                                <h6>Terms & Conditions</h6>
                            </a>
                            <a href="">
                                <h6>Privacy Policy</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                }
                .footer {
                    padding: 4px 64px 0 64px;
                    margin: 72px 72px 0 72px;
                    background: linear-gradient(176.64deg, #ffffff00 -71.48%, rgba(255, 255, 255, 0.1) 51.74%);
                    mix-blend-mode: normal;
                    opacity: 1;
                    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
                    border-radius: 20px 20px 0 0;
                }
                .footer-wrap {
                    width: 85%;
                    height: 460px;
                    padding: 64px;
                    padding-bottom: 0;
                    margin: 72px;
                    position: absolute;

                    background: linear-gradient(176.64deg, #ffffff -71.48%, rgba(255, 255, 255, 0.1) 51.74%);
                    mix-blend-mode: normal;
                    opacity: 0.15;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 20px 20px 0 0;
                }
                .footer-contents {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    grid-gap: 12px;
                    justify-items: start;
                    align-items: start;
                    justify-content: start;
                }
                .footer .form {
                    grid-column: 1 / span 3;
                    width: 100%;
                }
                .footer .form h2 {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 42px;
                    line-height: 59px;
                    color: #ffffff;
                }
                .footer .form p {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    color: #a7a9ac;
                }
                .footer .form span {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 21px;
                    line-height: 25px;

                    color: #ffffff;
                }
                .footer .form input {
                    height: 65px;
                    width: 536px;
                    padding-left: 28px;
                    padding-right: 28px;
                }
                .footer .link-group {
                    grid-column: span 1;
                    width: 100%;
                }
                .footer .link-group h5 {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 22px;
                    line-height: 26px;
                    color: #ffffff;
                }
                .footer .link-group .link-list {
                    display: flex;
                    flex-direction: column;
                }
                .footer .link-group .link-list a {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 28px;
                    color: #ffffff;
                }
                .footer hr {
                    margin-top: 64px;
                }
                .footer .end {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 24px;
                    padding-bottom: 36px;
                }
                .footer .end .social-links a {
                    margin-left: 16px;
                }
                .footer .end h6 {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    color: #a7a9ac;
                }
                .footer .end .tnc-links {
                    display: flex;
                }
                .footer .end .tnc-links h6 {
                    margin: 0;
                }
                .footer .end .tnc-links a:last-child {
                    margin-left: 16px;
                }
                .copyright h6 {
                    margin: 0;
                }
                .top-social-links {
                    display: none;
                    margin-top: 24px;
                    grid-column: span 6;
                    width: 100%;
                    justify-content: center;
                }

                @media screen and (max-width: 480px) {
                }
                @media screen and (max-width: 768px) {
                    .footer .form {
                        text-align: center;
                    }
                    .footer .link-group {
                        grid-column: span 6 !important;
                        text-align: center;
                    }
                    .top-social-links {
                        display: flex;
                    }
                }
                @media screen and (max-width: 1024px) {
                    .footer {
                        padding: 32px 24px 0 !important;
                        margin: 53px 24px 0 !important;
                    }
                    .footer .link-group {
                        grid-column: span 6;
                    }
                    #email {
                        width: 80%;
                    }
                    .footer .end {
                        flex-direction: column;
                    }
                    .footer .end .tnc-links {
                        margin-top: 16px;
                        flex-direction: column;
                    }
                    .social-links {
                        display: none;
                    }
                    .footer .end h6 {
                        font-weight: 400;
                        font-size: 12px;
                    }
                    .footer .form h2 {
                        font-weight: 600 !important;
                        font-size: 23px !important;
                        line-height: 35px !important;
                    }
                    .footer .form p {
                        font-size: 14px !important;
                    }
                    .footer .form span {
                        font-size: 14px !important;
                    }
                    .footer .link-group h5 {
                        font-size: 20px !important;
                        line-height: 0px !important;
                    }
                    .footer .link-group .link-list a {
                        font-weight: 400 !important;
                        font-size: 14px !important;
                        line-height: 25px !important;
                    }
                    .footer .form input {
                        height: 39px;
                        padding-left: 16px;
                        padding-right: 16px;
                        font-size: 14px;
                    }
                }
                @media screen and (max-width: 1500px) {
                    .footer .form {
                        grid-column: span 6;
                    }
                    .footer .link-group {
                        grid-column: span 2;
                    }
                }
            `}</style>
        </>
    );
}
