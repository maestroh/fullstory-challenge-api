import React from "react";
import Head from "next/head";
import Router from "next/router";
import { injectGlobal } from "styled-components";

import Header from "../components/header";

injectGlobal`
  @font-face {
  font-family: "Bebas Neue";
  src: url('static/BebasNeue-webfont.woff') format('woff');
  font-weight: thin;
  font-style: thin;
}
`;

export default Page =>
  class Master extends React.Component {
    static getInitialProps(ctx) {
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
      return {
        ...pageProps,
        currentUrl: ctx.pathname
      };
    }

    constructor(props) {
      super(props);

      this.logout = this.logout.bind(this);
    }

    logout(eve) {
      if (eve.key === "logout") {
        Router.push(`/?logout=${eve.newValue}`);
      }
    }

    componentDidMount() {
      window.addEventListener("storage", this.logout, false);
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.logout, false);
    }

    render() {
      return (
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Starter Pack</title>
            <script src="static/scripts.js">{}</script>
          </Head>
          <Header {...this.props} />
          <Page {...this.props} />
        </div>
      );
    }
  };
