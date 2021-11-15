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

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
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
          <Component {...pageProps} />
        </Main>
      </Page>
      
    </React.Fragment>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
