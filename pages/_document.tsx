import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    const handleFontLoad = (event: any) => {
      event.target.rel = 'stylesheet';
    };
    return (
      <Html lang="en">
        <Head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
          <link href='//fonts.googleapis.com/css?family=Raleway:400,200,300,500,600,700,800,100%7CPT+Sans:400,400italic,700,700italic&display=swap' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/style.css" />
          <link rel="shortcut icon" href="/img/logo/icon blue.png" />
          <link rel="stylesheet" href="/css/plugins.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/mine.css" />
          <link rel="stylesheet" href="/css/colors/purple.css" />
          <link rel="stylesheet" href="/css/splide.min.css" />
          <link rel="preload" href="/css/fonts/thicccboi.css" as="style" onLoad={handleFontLoad} />
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

          <script src="/js/plugins.js"></script>
          <script src="/js/theme.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
          <script src="/js/splide.js"></script>
          <script src="/js/splide.min.js"></script>
        </Head>
        <body>
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
          {/* <Script src="/js/plugins.js" />
          <Script src="/js/theme.js" /> */}
        </body>
      </Html>
    );
  }
}