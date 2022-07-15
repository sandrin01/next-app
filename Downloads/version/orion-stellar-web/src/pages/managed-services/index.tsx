import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Config from "../../lib/config";
import Soon from "../soon";

export default function Index() {
    const page = (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <NavBar />
                </div>
                <div className="header">
                    {/* <img id="cardLogo" src="/images/logo-white.svg" alt="orion sella logo" /> */}
                    <h1>Managed Services</h1>
                </div>
                {/* <div className="half-grid">
                    <img src="/images/ms/1.png" alt="" />
                </div> */}
                <div className="half-grid">
                    <div className="grid">
                        <div className="line"></div>
                        <div className="row">
                            <a href="#disaster-recovery">
                                <img src="images/ms/grid/1.png" alt="" className="image1 grow" />
                            </a>
                            <a href="#it-noc">
                                <img src="images/ms/grid/2.png" alt="" className="image2 grow" />
                            </a>
                        </div>
                        <div className="row">
                            <a href="#workspaces">
                                <img src="images/ms/grid/3.png" alt="" className="image3 grow" />
                            </a>
                            <a href="#datacenters">
                                <img src="images/ms/grid/4.png" alt="" className="image4 grow" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="disaster-recovery" className="full-grid">
                    <img src="/images/ms/2.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/31.png" alt="" />
                </div>
                <div id="datacenters" className="full-grid">
                    <img src="/images/ms/4.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/5.png" alt="" />
                </div>
                <div id="it-noc" className="full-grid">
                    <img src="/images/ms/6.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/7.png" alt="" />
                </div>
                <div id="workspaces" className="full-grid">
                    <img src="/images/ms/8.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/9.png" alt="" />
                </div>

                <Footer />
            </div>
            <style jsx>{`
                .grow {
                    transition: all 0.2s ease-in-out;
                }
                .grow:hover {
                    transform: scale(1.05);
                }
                .back-wall {
                    background: linear-gradient(100deg, #0f1d31 30.98%, rgba(3, 96, 102, 0.81) 163.03%);
                }
                .container {
                    width: 100%;
                    font-family: "SegoeUI";
                    font-style: normal;
                    color: #ffffff;
                }
                .cover {
                    background-repeat: round;
                    background-image: url("/images/ms/cover.png");
                    height: 68vh;
                    display: flex;
                    flex-direction: column;
                }
                .header {
                    margin-top: -156px;
                }
                .header img {
                    margin-left: 311px;
                    margin-bottom: -41px;
                }
                .header h1 {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 180px;
                    color: #ffffff;
                    text-align: center;
                    margin: 0;
                    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.7);
                }
                .full-grid img {
                    width: 100%;
                }
                .full-grid {
                    margin-bottom: 100px;
                }
                .half-grid {
                    margin-bottom: 86px;
                }

                .grid {
                    margin-top: 24px;
                    height: 72vh;
                }
                .grid .line {
                    width: 1000px;
                    height: 0px;
                    border: 1px solid #ffffff;
                    -webkit-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                    transform: rotate(90deg);
                    margin-top: 72vh;
                    margin-left: 32vw;
                }
                .grid .row .title {
                    position: absolute;
                    width: 839px;
                    height: 222px;
                    left: 203px;
                    top: 2554px;

                    font-weight: bold;
                    font-size: 160px;
                    line-height: 213px;

                    color: #7c8c9b;
                    margin: 0;
                }
                .grid .row .sub-title {
                    position: absolute;
                    width: 702px;
                    height: 44px;
                    left: 298px;
                    top: 2747px;

                    font-weight: 350;
                    font-size: 18px;
                    line-height: 24px;

                    color: #ffffff;
                }
                .grid .row .image1 {
                    position: absolute;
                    width: 759.79px;
                    height: 359.56px;
                    left: 166.96px;
                    top: 1021px;
                }
                .grid .row .image2 {
                    position: absolute;
                    width: auto;
                    height: 359.56px;
                    left: 964.21px;
                    top: 1024.28px;
                }
                .grid .row .image3 {
                    position: absolute;
                    width: 358.49px;
                    height: auto;
                    left: 568.26px;
                    top: 1410.88px;
                }
                .grid .row .image4 {
                    position: absolute;
                    width: 759.79px;
                    height: 359.56px;
                    left: 964.21px;
                    top: 1414.88px;
                }

                @media screen and (max-width: 768px) {
                    .grid {
                        display: none !important;
                    }
                }
                @media (min-width: 769px) {
                    h1 {
                        font-size: 3rem;
                    }
                    h2 {
                        font-size: 2.25rem;
                    }
                }
            `}</style>
        </Layout>
    );

    return (
        <>
            {Config.published && page}
            {!Config.published && <Soon />}
        </>
    );
}
