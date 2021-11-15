import React from 'react';
import IndexView from '../views/IndexView';

import AppConfig from '../../AppConfig'

const IndexPage = (props) => {
  return <IndexView {...props}/>;
};

export default IndexPage;

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