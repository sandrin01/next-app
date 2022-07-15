import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";
import BackTitle from "../../components/BackTitle";
import ProfileCard from "../../components/ProfileCard";
import NavBar from "../../components/NavBar";
import CircleButton from "../../components/CircleButton";
import ActiveLink from "../../components/ActiveLink";
import Config from "./../../lib/config";
import Soon from "./../../pages/soon";

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
                    <h1>Managed value added Services</h1>
                    <h2>for Enterprises</h2>
                </div>
                <div className="half-grid">
                    <img src="/images/vas.png" alt="" />
                </div>
                {/* <div className="grid-2">
                    <div className="grid-item-1">
                        <div className="text right">
                            Enterprises have relied on Managed Infrastructure
                            Service Providers (MSP) to get standardized and
                            cost-efficient services which allows Enterprises to
                            focus on their core business while minimizing risk,
                            increasing infrastructure up time to gain access to
                            newer technologies and increasing agility.
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <div className="title">
                            OrionStellar managed value-added services
                        </div>
                        <div className="text left">
                            OrionStellar managed value-added services are
                            designed and delivered to ensure our clients can
                            focus on the core business while we take care of
                            digital infrastructure related services and service
                            management compiling with both client’s and industry
                            standards.
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <img src="/images/mvas/2.png" alt="" />
                        <div className="btn">
                            <CircleButton
                                title="Storage"
                                dark={true}
                                size="148px"
                            />
                        </div>
                        <div className="text left">
                            OrionStellar handles the complex aspects of data
                            storage while ensuring the security, and data
                            integrity. OrionStellar STaaS offerings would be
                            Block storage with multiple performance classes •
                            Highly scalable object storage solutions in to Peta
                            Byte levels -Data transfer via secure links -Sri
                            Lankan boundary data sovereignty
                        </div>
                    </div>
                    <div className="grid-item-1">
                        <img src="/images/mvas/1.png" alt="" />
                        <div className="btn">
                            <CircleButton
                                title="Back Up"
                                dark={true}
                                size="148px"
                            />
                        </div>
                        <div className="text left">
                            OrionStellar Back up as a service (BaaS) offers a
                            data protection solution using leading Commvault
                            technology to back up mission critical enterprise
                            data in a secure environment OrionStellar further
                            guarantees a high level of security with the
                            end-to-end encryption
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
            <style jsx>{`
                .back-wall {
                    background: linear-gradient(
                        100deg,
                        #0f1d31 30.98%,
                        rgba(3, 96, 102, 0.81) 163.03%
                    );
                }
                .container {
                    width: 100%;
                    font-family: "SegoeUI";
                    font-style: normal;
                    color: #ffffff;
                }
                .cover {
                    background-repeat: no-repeat;
                    background-image: url("/images/cover11.png");
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                }
                .header {
                    margin-top: -312px;
                }
                .header h1 {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 128px;
                    color: #ffffff;
                    text-align: center;
                    margin: 0;
                }
                .header h2 {
                    margin: 0;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 98px;
                    color: #ffffff;
                    text-align: right;
                    margin-bottom: 124px;
                    margin-right: 253px;
                }
                .header h3 {
                    margin: 0;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 98px;
                    color: #ffffff;
                    text-align: left;
                    margin-left: 133px;
                }
                .grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 40px;
                    margin: 0 5vw;
                }
                .grid-item-1 {
                    grid-column: span 1;
                    display: flex;
                    flex-direction: column;
                }
                .text {
                    font-style: normal;
                    font-size: 24px;
                    line-height: 32px;
                    text-align: right;

                    color: #ffffff;
                }
                .text.right {
                    text-align: right;
                }
                .text.left {
                    text-align: left;
                }
                .title {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 117.01%;
                    color: #ffffff;
                }
                .btn {
                    display: flex;
                    justify-content: center;
                    margin-top: -78px;
                    margin-bottom: 75px;
                }
                .half-grid {
                    width: 100%;
    display: flex;
    justify-content: center;
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
