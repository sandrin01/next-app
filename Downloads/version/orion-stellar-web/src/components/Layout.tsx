import Head from "next/head";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/segoe-ui-4"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />
      </Head>

      <main>
        {children}
      </main>
      <style jsx>{`
          @font-face {
            font-family: "SegoeUI";
            src: local("Segoe UI Light"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf)
                format("truetype");
            font-weight: 100;
          }

          @font-face {
            font-family: "SegoeUI";
            src: local("Segoe UI Semilight"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf)
                format("truetype");
            font-weight: 200;
          }

          @font-face {
            font-family: "SegoeUI";
            src: local("SegoeUI"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf)
                format("truetype");
            font-weight: 400;
          }

          @font-face {
            font-family: "SegoeUI";
            src: local("Segoe UI Semibold"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf)
                format("truetype");
            font-weight: 600;
          }

          @font-face {
            font-family: "SegoeUI";
            src: local("Segoe UI Bold"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf)
                format("truetype");
            font-weight: 700;
          }

          @font-face {
            font-family: "SegoeUI";
            src: local("Segoe UI Black"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2)
                format("woff2"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff)
                format("woff"),
              url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf)
                format("truetype");
            font-weight: 900;
          }
          .root {
            display: block;
          }
          main {
            min-height: 100%;
          }
          @media (min-width: 769px) {
            /* .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            } */
          }
        `}
      </style>
    </div>
  );
}
