import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";

export default function Index() {
    return (
        <>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <div className="top-card">
                        <h1>Coming Soon</h1>
                        <h5>03 November 2021</h5>
                    </div>
                    <img src="/images/logo.svg" alt="OrionStellar" />
                </div>
            </div>
            <style jsx>{`
                .back-wall {
                    height: 100vh;
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
                    background-image: url("/images/home/1.jpg");
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: center;
                    height: 100%;
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
                    font-weight: normal;
                    font-size: 36px;
                    color: #ffffff;
                    text-align: center;
                    margin-bottom: 24px;
                    margin-top: 100px;
                }
                .top-card {
                    width: 40vw;
                    padding: 21vh 5vw 5vh;
                    background: #000000;
                }
                .top-card h1 {
                    font-family: Segoe UI;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 101.01%;
                    text-align: center;
                    letter-spacing: 0.07em;
                    color: #ffffff;
                }
                .top-card h5 {
                    font-family: Segoe UI;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 21px;
                    text-align: center;
                    letter-spacing: 0.46em;
                    text-transform: uppercase;
                    color: #ffffff;
                }
                .container img {
                    width: 42vw;
                    margin-top: 20vh;
                }

                @media all and (max-width: 500px) {
                    .top-card {
                        width: 70vw;
                        padding: 10vh 5vw 5vh;
                        background: #000000;
                    }
                    .top-card h1 {
                        font-size: 44px;
                    }
                    .top-card h5 {
                        font-size: 12px;
                    }
                    .container img {
                        width: 70vw;
                    }
                }
            `}</style>
        </>
    );
}
