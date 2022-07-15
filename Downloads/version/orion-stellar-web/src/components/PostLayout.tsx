import React from "react";
import styles from "../../public/styles/content.module.css";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  image?: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  image = slug=="meet-me" ? "/images/cover5.png" : (slug=="co-location-hosting" ? "/images/cover8.png" : "/images/cover6.png"), // TODO: need to fix image path
  description = "",
  children,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className="contents">
        <div className="container cover">
          <NavBar />
          <h2 className="main-title">{title}</h2>
        </div>
        <div className="container description">
          <div className={styles.content}>{children}</div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
          .container {
            /* width: 100%; */
          }
          .contents {
            background: linear-gradient(
              115deg,
              #000000 32.35%,
              #c1c1c1 248.34%
            );
            color: white !important;
          }
          .cover {
            background-repeat: round;
            background-image: url(${image});
            height: 1108px;
            display: flex;
            flex-direction: column;
          }
          .main-title {
            margin-left: 106px;
            width: 1382px;
            font-style: normal;
            font-weight: bold;
            font-size: 110px;
            line-height: 101.01%;
            color: #ffffff;
          }         
          .center-all {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .container.description {
            margin: 0 106px;
          }
          .description h2{
            font-family: Segoe UI;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 101.69%;
/* identical to box height, or 37px */

text-align: center;
letter-spacing: 0.125em;
text-transform: uppercase;

color: #FFFFFF;
          }
          .description p{
            font-family: Segoe UI;
font-style: normal;
font-weight: 350;
font-size: 24px;
line-height: 32px;

color: #FFFFFF;
          }
          .metadata div {
            display: inline-block;
            margin-right: 0.5rem;
          }
          article {
            flex: 1 0 auto;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 2.25rem;
          }
          .tag-list {
            list-style: none;
            text-align: right;
            margin: 1.75rem 0 0 0;
            padding: 0;
          }
          .tag-list li {
            display: inline-block;
            margin-left: 0.5rem;
          }
          .social-list {
            margin-top: 3rem;
            text-align: center;
          }

          @media (min-width: 769px) {
            .container {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          /* Syntax highlighting */
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata,
          .token.plain-text {
            color: #6a737d;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword,
          .token.operator {
            color: #d73a49;
          }

          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #22863a;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #032f62;
          }

          .token.function,
          .token.class-name {
            color: #6f42c1;
          }

          /* language-specific */

          /* JSX */
          .language-jsx .token.punctuation,
          .language-jsx .token.tag .token.punctuation,
          .language-jsx .token.tag .token.script,
          .language-jsx .token.plain-text {
            color: #24292e;
          }

          .language-jsx .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-jsx .token.tag .token.class-name {
            color: #005cc5;
          }

          .language-jsx .token.tag .token.script-punctuation,
          .language-jsx .token.attr-value .token.punctuation:first-child {
            color: #d73a49;
          }

          .language-jsx .token.attr-value {
            color: #032f62;
          }

          .language-jsx span[class="comment"] {
            color: pink;
          }

          /* HTML */
          .language-html .token.tag .token.punctuation {
            color: #24292e;
          }

          .language-html .token.tag .token.attr-name {
            color: #6f42c1;
          }

          .language-html .token.tag .token.attr-value,
          .language-html
            .token.tag
            .token.attr-value
            .token.punctuation:not(:first-child) {
            color: #032f62;
          }

          /* CSS */
          .language-css .token.selector {
            color: #6f42c1;
          }

          .language-css .token.property {
            color: #005cc5;
          }
        `}
      </style>
    </Layout>
  );
}
