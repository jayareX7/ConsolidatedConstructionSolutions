import React from "react";
import Head from "next/head";
import appData from "@content/settings/setting.json";
import Script from "next/script";
import { useEffect } from "react";
import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', appData.googleanalytics.measurementID);
  }, []);

  return (
    <>

<Script
        src={`https://www.googletagmanager.com/gtag/js?id=${appData.googleanalytics.measurementID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${appData.googleanalytics.measurementID}');
        `}
      </Script>

      <Head>
          {/* seo begin */}
          <title>{appData.siteSettings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
