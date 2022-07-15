import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import React from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="contents">
        <div className="container cover">
          <NavBar />
          <h2 className="main-title">Contact Us</h2>
        </div>
        <div className="container description"></div>
        <Footer />
      </div>
      <style jsx>{`
        .container {
          /* margin-top: 100px; */
        }
        .cover {
          background-repeat: round;
          background-image: url("/images/cover5.png");
          height: 1108px;
          display: flex;
          flex-direction: column;
        }
        .main-title {
          position: absolute;
          width: 762px;
          height: 200px;
          left: 203px;
          top: 348px;
          font-style: normal;
          font-weight: bold;
          font-size: 150px;
          line-height: 200px;
          color: #ffffff;
          margin: 0;
          z-index: 10;
        }
        .contents {
          background: linear-gradient(115deg, #000000 32.35%, #c1c1c1 248.34%);
        }
        .center-all {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container.forms {
          padding: 0 160px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: -408px;
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
}
