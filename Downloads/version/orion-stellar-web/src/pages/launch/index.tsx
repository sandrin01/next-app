import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React, { useEffect, useState } from "react";
import CircleButton from "../../components/CircleButton";
import Config from "./../../lib/config";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    const [wait, setWait] = useState(false);
    const path = router.asPath;
    const nextPath = "/launch?click=1";

    useEffect(() => {
        console.log(`click`, path);
        if (path === nextPath) {
            console.log(`launch`);
            launch();
        }
    }, []);

    const onLaunch = () => {
        setWait(true);
        launch();
    };

    const launch = () => {
        if (Config.published) {
            console.log(`published`);
            router.push("/");
        } else {
            console.log(`not published`);
            router.push(nextPath);
            setTimeout(() => {
                console.log(`next path`);
                router.reload();
            }, 1000);
        }
    };

    return (
        <>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <button
                        className={wait ? "btn pulse" : "btn"}
                        onClick={onLaunch}
                    >
                        <CircleButton title="Launch" />
                    </button>
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
                    background-image: url("/images/launch.png");
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
                .btn {
                    margin-top: 27vh;
                    border: 0;
                    border-radius: 100%;
                    background: unset;
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

                .pulse {
                    animation: pulse-animation 2s infinite;
                }

                @keyframes pulse-animation {
                    0% {
                        box-shadow: 0 0 0 0px rgb(255 255 255);
                    }
                    100% {
                        box-shadow: 0 0 0 36px rgba(0, 0, 0, 0);
                    }
                }
            `}</style>
        </>
    );
}
