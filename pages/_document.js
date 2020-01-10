import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const appDomain = process.env.APP_DOMAIN;
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            type="text/css"
            href={`${appDomain}/static/css/adminlte.min.css`}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kanit:200,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href={`${appDomain}/static/plugins/fontawesome-free/css/all.min.css`}
          />
        </Head>
        <body
          className="hold-transition layout-top-nav"
          style={{ fontFamily: "Kanit, sans-serif" }}
        >
          <div className="wrapper">
            <Main />
            <NextScript />
          </div>
          <script src={`${appDomain}/static/plugins/jquery/jquery.min.js`} />
          <script
            src={`${appDomain}/static/plugins/jquery-ui/jquery-ui.min.js`}
          />
          <script
            src={`${appDomain}/static/plugins/bootstrap/js/bootstrap.bundle.min.js`}
          />
          <script src={`${appDomain}/static/plugins/moment/moment.min.js`} />
          <script src={`${appDomain}/static/js/adminlte.js`} />
          <script src={`${appDomain}/static/js/demo.js`} />
        </body>
      </html>
    );
  }
}
