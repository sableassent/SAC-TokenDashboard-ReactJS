import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
      return (
        <html lang="en-US">
          <Head>
  
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="sac-token-dashboard" />
            <meta name="apple-mobile-web-app-title" content="sac-token-dashboard" />
            <meta name="theme-color" content="#30363f" />
            <meta name="msapplication-navbutton-color" content="#30363f" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="msapplication-starturl" content="/" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      );
    }
  }
  