import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import Footer from "../../components/Footer";
import BackTitle from "../../components/BackTitle";
import ProfileCard from "../../components/ProfileCard";
import NavBar from "../../components/NavBar";
import CircleButton from "../../components/CircleButton";
import Config from "./../../lib/config";
import Soon from "./../../pages/soon";

export default function Index() {
    const page = (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <NavBar />
            <div className="container">
                <div className="blog-content-wrapper">
                    <div className="blog-content">
                        <h1>Orion Stellar Blog</h1>
                        <p>npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.</p>
                    </div>
                </div>

                <Footer />
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    background: linear-gradient(125.54deg, #0f1d31 30.98%, rgba(3, 91, 91, 0.77) 163.03%);
                }
                .blog-content-wrapper{
                    padding-top : 200px;
                    color: #fff;
                }

                .blog-content{
                    padding: 100px;
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
