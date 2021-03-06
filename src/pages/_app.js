import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from '../../components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Main from '../layouts/Main';

import { SessionProvider } from "next-auth/react"
import AppConfig from '../../appConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import GBreadCrumbs from '../layouts/Main/GBreadCrumbs'

export default function App({ Component, pageProps:{ session, ...pageProps } }) {
  const store = useStore(pageProps.initialReduxState)

  console.log(":::::: Session object :::::: ",session);
  console.log(":::::: pageProps abc object :::::: ",pageProps);
  console.log(":::::: Component is :::: ", Component);
  const persistor = persistStore(store);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Fragment>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>UI COMPOSER | UI Kit by CLOUDSEED.</title>
            </Head>
            <Page>
              <Main>
                <GBreadCrumbs/>
                <Component {...pageProps}/>
              </Main>
            </Page>
          </React.Fragment>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const res = await fetch(AppConfig.baseUrl+AppConfig.api.menu);
  const data = await res.json();
  console.log("getServerSideProps ::: ########## Menu JSON Data :::::: ", data);

 // const footerRes = await fetch(AppConfig.baseUrl+AppConfig.api.footer);
 // const footerData = await footerRes.json();
 // console.log("getServerSideProps ::: ########## Footer Data JSON Data :::::: ", footerData);
 return {
     props: { 
       menu: data
     }
 }
}