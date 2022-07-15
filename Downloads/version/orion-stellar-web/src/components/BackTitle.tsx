import React from "react";
import { Parallax } from "react-scroll-parallax";

type Props = {
    title: string;
    subtitle?: string;
    size?: string;
    bottom?: number;
    color?: string;
};

export default function BackTitle({ title, subtitle, size, bottom, color }: Props) {
    return (
        <>
            <div className="parallax">
                <Parallax y={[-10, 30]}>
                    <span className="back-title">{title}</span>
                </Parallax>
                <div className="sub-title-wrap">
                    <Parallax y={[-5, 15]}>
                        <span className="sub-title">{subtitle}</span>
                    </Parallax>
                </div>
            </div>
            <div className="no-parallax">
                <span className="back-title">{title}</span>
                <span className="sub-title">{subtitle}</span>
            </div>
            <style jsx>{`
                .back-title {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: 900;
                    font-size: ${size || 20}vh;
                    line-height: 483px;
                    color: ${color || "#0000004d"};
                    margin-bottom: -${bottom || 99}px;
                    margin-top: -163px;
                }
                .sub-title-wrap {
                    margin-top: -165px;
                    margin-left: 100px;
                    margin-bottom: 165px;
                }
                .sub-title {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 94.01%;
                    letter-spacing: 0.53em;
                    text-transform: uppercase;
                    color: #ffffff;
                }
                .no-parallax {
                    display: none;
                }
                .parallax {
                    margin-top: -100px;
                }

                @media screen and (max-width: 1024px) {
                    .parallax {
                        display: none;
                    }
                    .no-parallax {
                        display: flex;
                        flex-direction: column;
                        margin-top: 200px;
                        margin-bottom: 68px;
                    }
                    .back-title {
                        text-align: center;
                        font-size: 16vw;
                        line-height: 68px;
                    }
                    .sub-title {
                        font-size: 13px !important;
                        line-height: 94.01%;
                        text-align: center;
                        margin-top: 58px;
                    }
                }
            `}</style>
        </>
    );
}
