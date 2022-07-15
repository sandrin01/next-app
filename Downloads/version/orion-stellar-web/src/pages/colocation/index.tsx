import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
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
                    <h1 className="heading">Co-location</h1>
                </div>
                <div className="container service">
                    <p className="title">
                        Our co-location service allows you to house server
                        infrastructure in our Colombo facility in the heart of
                        business district. Our data center is built to the
                        global standards using world class infrastructure
                        technologies meeting the robust functionality of TIA 942
                        Rated 03 data center standards
                    </p>

                    <div className="service-grid-line"></div>
                    <div className="service-grid-container">
                        <div className="grid-item1">
                            <img
                                src="images/colocation/1.png"
                                alt=""
                                className="grid-image"
                            />
                        </div>
                        <div className="grid-item2">
                            <img
                                src="images/colocation/2.jpg"
                                alt=""
                                className="grid-image"
                            />
                        </div>
                        <div className="grid-item3">
                            <div className="grid-text">
                                Dedicated Cages With Biometric Access Control
                                For Large Enterprises Specially For BFIS
                            </div>
                        </div>
                        <div className="grid-item4">
                            <div className="grid-text">
                                Individual Racks With Biometric or Lockable
                                Doors
                            </div>
                        </div>
                        <div className="grid-item5">
                            <img
                                src="images/colocation/3.jpg"
                                alt=""
                                className="grid-image"
                            />
                        </div>
                        <div className="grid-item6">
                            <img
                                src="images/colocation/4.png"
                                alt=""
                                className="grid-image"
                            />
                        </div>
                    </div>
                </div>

                <div className="quote">
                    <div className="wrapper">
                        <div className="text">
                            We complement our infrastructure offering with an
                            array of managed <br/> value-added services including
                            “Remote Pair of Hands”.
                        </div>
                    </div>
                </div>

                <div className="sub-btn">
                    <h5 className="sub-btn-title">More Details</h5>
                    <div className="btn-wrap">
                        <ActiveLink
                            href="posts/co-location-hosting"
                            children={
                                <div className="first-btn grow">
                                    What is Co-Location?
                                </div>
                            }
                        />
                        <ActiveLink
                            href="posts/meet-me"
                            children={
                                <div className="middle-btn grow">
                                    What is a Meet-Me Room?
                                </div>
                            }
                        />
                        <ActiveLink
                            href="posts/wan-cost"
                            children={
                                <div className="middle-btn grow">
                                    Why Carrier-Neutral Data Centers are Key to
                                    Reduce WAN Costs
                                </div>
                            }
                        />
                    </div>
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
                .quote {
                    display: flex;
                    justify-content: center;
                }
                .quote .wrapper {
                    width: 56vw;
                    background-color: black;
                    padding: 36px;
                }
                .quote .text {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 28px;
                    line-height: 36px;
                    text-align: center;
                    color: white;
                }
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
                    background-repeat: round;
                    background-image: url("/images/co-cover.png");
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                }
                .main-title {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 100px;
                    color: #ffffff;
                }
                .heading {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 275px;
                    color: #ffffff;
                    text-align: center;
                    margin-bottom: 24px;
                }
                .service {
                    display: flex;
                    flex-wrap: wrap;
                }
                .heading-subtitle {
                    width: 50vw;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: 350;
                    font-size: 18px;
                    line-height: 24px;
                    margin-top: 64px;
                    margin-left: 200px;
                    color: #ffffff;
                }
                .heading-subtitle .subtitle-circle {
                    width: 123px;
                    height: 122px;
                    background: #000000;
                    border-radius: 100px;
                    margin-bottom: -6vh;
                    margin-left: -3vw;
                }
                .service .title {
                    margin-top: 64px;
                    margin-bottom: 57px;
                    margin-left: 20vw;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 32px;
                    color: #ffffff;
                    width: 60vw;
                    text-align: center;
                }
                .challenges .box-row {
                    margin-top: 30px;
                    display: flex;
                }
                .challenges .box-row .box {
                    height: 199px;
                    background: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 26px;
                }
                .challenges .box-row .box-first {
                    flex: 2;
                    margin-right: 11px;
                    justify-content: flex-end;
                }
                .challenges .box-row .box-center {
                    flex: 1;
                    margin-left: 11px;
                    margin-right: 11px;
                }
                .challenges .box-row .box-last {
                    flex: 2;
                    margin-left: 11px;
                    justify-content: flex-start;
                }
                .challenges .box .msg {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    color: #ffffff;
                }
                .challenges .box-first .msg {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: right !important;
                    width: 196px;
                    color: #ffffff;
                }
                .challenges .box-last .msg {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: left !important;
                    width: 196px;
                    color: #ffffff;
                }
                .solutions {
                    margin-top: 140px;
                    display: flex;
                }
                .solutions .box {
                    flex: 1;
                    background: #000000;
                    padding: 100px;
                    padding-right: 150px;
                    padding-left: 140px;
                }
                .solutions .box p {
                    font-weight: 350;
                    font-size: 24px;
                    line-height: 32px;
                }
                .solutions .no-box {
                    flex: 1;
                    padding: 100px;
                    padding-right: 140px;
                    padding-left: 150px;
                }
                .solutions .no-box .title {
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 99.01%;
                    color: #ffffff;
                }
                .solutions .no-box p {
                    font-weight: 350;
                    font-size: 24px;
                    line-height: 32px;
                }
                .grid {
                    display: grid;
                }
                .grid .line {
                    width: 1000px;
                    height: 0px;
                    border: 1px solid #ffffff;
                    -webkit-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                    transform: rotate(90deg);
                    margin-top: 56vh;
                    margin-left: 32vw;
                }
                .grid .row .title {
                    /* position: absolute; */
                    width: 839px;
                    height: 222px;
                    /* left: 203px;
          top: 2554px; */

                    font-weight: bold;
                    font-size: 160px;
                    line-height: 213px;

                    color: #7c8c9b;
                    margin: 0;
                }
                .grid .row .sub-title {
                    /* position: absolute; */
                    width: 702px;
                    height: 44px;
                    /* left: 298px;
          top: 2747px; */

                    font-weight: 350;
                    font-size: 18px;
                    line-height: 24px;

                    color: #ffffff;
                }
                .grid .row .image1 {
                    /* position: absolute; */
                    width: 759.79px;
                    height: 359.56px;
                    /* left: 166.96px;
          top: 2820px; */
                }
                .grid .row .image2 {
                    /* position: absolute; */
                    width: 358.49px;
                    height: 359.56px;
                    /* left: 964.21px;
          top: 2824.28px; */
                }
                .grid .row .image3 {
                    /* position: absolute; */
                    width: 358.49px;
                    height: 359.56px;
                    /* left: 568.26px;
          top: 3214.88px; */
                }
                .grid .row .image4 {
                    /* position: absolute; */
                    width: 759.79px;
                    height: 359.56px;
                    /* left: 964.21px;
          top: 3214.88px; */
                }
                .grid .row-1.description {
                    /* position: absolute; */
                    width: 525px;
                    height: 291px;
                    /* left: 1148px;
          top: 2624px; */

                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                }
                .grid .row-2.description {
                    /* position: absolute; */
                    width: 345px;
                    height: 255px;
                    /* left: 1355px;
          top: 3044.46px; */
                    margin: 0;

                    font-weight: 600;
                    font-size: 24px;
                    line-height: 127.69%;

                    letter-spacing: 0.29em;
                    text-transform: uppercase;
                }
                .grid .row-3.description {
                    /* position: absolute; */
                    width: 394px;
                    height: 254px;
                    /* left: 137px;
          top: 3430.46px; */

                    font-weight: 600;
                    font-size: 24px;
                    line-height: 127.69%;
                    text-align: right;

                    letter-spacing: 0.29em;
                    text-transform: uppercase;
                }
                .message {
                    width: 1057px;
                    height: 156px;
                    margin-top: 1280px;
                    margin-left: 392px;
                    background: #000000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .message p {
                    width: 940px;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 32px;
                    text-align: center;
                }

                .deliverables {
                    margin-top: 124px;
                }
                .deliverables .card-section {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: -124px !important;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }

                .grid-2 {
                    margin-top: 124px;
                    margin-right: 134px;
                    margin-left: 134px;
                }
                .grid-2 .line {
                    /* position: absolute; */
                    width: 336px;
                    height: 0px;
                    /* left: 743px;
          top: 4530px; */
                    border: 1px solid #ffffff;
                    transform: rotate(90deg);
                }
                .grid-2 .title-1 {
                    font-weight: bold;
                    font-size: 110px;
                    line-height: 128.51%;
                    color: #7c8c9b;
                }
                .grid-2 .title-main {
                    font-weight: bold;
                    font-size: 130px;
                    line-height: 134px;
                    color: #7c8c9b;
                    margin-top: -37px;
                    margin-bottom: -16px;
                }
                .grid-2 .sub-title {
                    font-weight: bold;
                    font-size: 100px;
                    line-height: 97.01%;
                    color: #7c8c9b;
                }
                .grid-2 .row {
                    display: flex;
                    margin-top: 100px;
                }
                .grid-2 .row p {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                }
                .grid-2 .row .service-des .title {
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 70px;
                }
                .grid-2 .row .description {
                    flex: 1;
                    margin-right: 100px;
                }
                .grid-2 .row .service-des {
                    flex: 1;
                    margin-left: 100px;
                }

                .grid-3 {
                    margin-top: 124px;
                    margin-right: 134px;
                    margin-left: 134px;
                }
                .grid-3 .logo {
                    margin-left: 100px;
                }
                .grid-3 .title-1 {
                    font-weight: bold;
                    font-size: 160px;
                    color: #7c8c9b;
                    margin-bottom: -41px;
                }
                .grid-3 .title-2 {
                    font-weight: bold;
                    font-size: 110px;
                    line-height: 128.51%;
                    margin-left: 544px;
                    color: #7c8c9b;
                }
                .grid-3 .sub-title {
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 99.01%;
                    margin-top: 64px;
                    margin-left: 100px;
                    margin-bottom: 124px;
                }
                .grid-3 p {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    margin-left: 100px;
                }

                .grid-4 {
                    margin-top: 124px;
                }
                .grid-4 img {
                    width: 100%;
                }
                .grid-4 .main-title {
                    font-weight: bold;
                    font-size: 318px;
                    line-height: 452px;
                    margin-left: 160px;
                    margin-top: -363.8px;
                }

                .grid-4 .startup-message {
                    width: 1049px;
                    margin-left: 280px;
                    font-style: normal;
                    font-weight: 350;
                    font-size: 18px;
                    line-height: 24px;
                    color: #ffffff;
                    z-index: 10;
                }

                .startup-message .black-circle {
                    width: 123px;
                    height: 122px;
                    background: #000000;
                    border-radius: 100px;
                    margin-bottom: -6vh;
                    margin-left: -3vw;
                }

                .grid-4 .circle {
                    display: none;
                    width: 123px;
                    height: 122px;
                    /* position: absolute; */
                    margin-top: -38px;
                    margin-left: 104px;
                    z-index: 0;
                    border-radius: 100%;
                    background: #000000;
                }

                .root-sub-title {
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 99.01%;
                    margin-top: 64px;
                    margin-left: 100px;
                    margin-bottom: 124px;
                }

                .grid-5 {
                    width: 100%;
                }
                .grid-5 .main-title {
                    font-weight: bold;
                    font-size: 120px;
                    line-height: 160px;
                    color: #7c8c9b;
                    margin-left: 205px;
                }
                .grid-5 .card-list {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    align-items: center;
                }
                .price-card {
                    width: 375px;
                    left: 148px;
                    top: 11690px;
                    background: #0a1422;
                    mix-blend-mode: normal;
                    backdrop-filter: blur(4px);
                    border-radius: 8px;
                }
                .price-card .title {
                    font-weight: bold;
                    font-size: 50px;
                    line-height: 67px;
                    color: #ffffff;
                    padding: 28px;
                    padding-top: 114px;
                }
                .price-card .content {
                    padding: 28px;
                }
                .price-card .content .row {
                    margin-bottom: 24px;
                }
                .price-card .content h4 {
                    margin: 0;
                }
                .price-card .content h5 {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    color: #ffffff;
                    margin: 0;
                }
                .price-card .price {
                    width: 100%;
                    height: 90px;
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 115.51%;
                    color: #000000;
                    background: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }

                .service-grid-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap: 37px;
                    margin-left: 192px;
                    margin-right: 192px;
                    margin-top: 190px;
                    margin-bottom: 190px;
                    z-index: 10;
                }
                .service-grid-container .grid-item1 {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    background-color: black;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                .service-grid-container .grid-item2 {
                    grid-column-start: 3;
                    grid-column-end: 4;
                }
                .service-grid-container .grid-item3 {
                    grid-column-start: 4;
                    grid-column-end: 5;
                    display: flex;
                    align-items: center;
                }
                .service-grid-container .grid-item4 {
                    grid-column-start: 1;
                    grid-column-end: 2;
                    display: flex;
                    align-items: center;
                }
                .service-grid-container .grid-item4 .grid-text {
                    text-align: right;
                }
                .service-grid-container .grid-item5 {
                    grid-column-start: 2;
                    grid-column-end: 3;
                }
                .service-grid-container .grid-item6 {
                    grid-column-start: 3;
                    grid-column-end: 5;
                    background-color: black;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                .service-grid-container .grid-text {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 29px;
                    line-height: 127.69%;
                    color: #ffffff;
                }
                .service-grid-container .grid-image {
                    width: 100%;
                }
                .service-grid-line {
                    position: relative;
                    width: 1010px;
                    height: 0px;
                    margin-left: 551.04px;
                    margin-bottom: -600px;
                    margin-top: 561px;
                    z-index: 0;
                    border: 1px solid #ffffff;
                    transform: rotate(90deg);
                }
                .sub-btn {
                    font-style: normal;
                    color: #ffffff;
                    font-family: Segoe UI;
                }
                .sub-btn .sub-btn-title {
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 115.51%;
                    margin-left: 93px;
                    margin-bottom: 44px;
                }
                .sub-btn .btn-wrap {
                    display: flex;
                    flex-direction: row;
                    gap: 28px;
                }
                .sub-btn .first-btn {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    padding: 10px 20px 10px 93px;
                    background: black;
                    color: #ffffff;
                }
                .sub-btn .middle-btn {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    padding: 10px 20px 10px 20px;
                    background: black;
                    color: #ffffff;
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
