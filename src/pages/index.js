import {useEffect,React} from 'react';
import IndexView from '../views/IndexView';

import AppConfig from '../../AppConfig';
import { useSelector, useDispatch } from 'react-redux';
import { header,footer} from '../redux/actions';


const IndexPage = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(header(props.menu))
    //dispatch(footer(props.footer))
  }, [dispatch])

  return <IndexView/>;
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