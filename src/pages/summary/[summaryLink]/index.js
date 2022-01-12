import {useEffect} from 'react';
import { useRouter } from 'next/router';
import APPConfig from '../../../../appConfig';
import { useSelector,useDispatch } from 'react-redux';
import SummaryView from '../../../views/Summary';
import { addBreadcrumbs} from '../../../redux/actions';


const Summary = () => {
  const router = useRouter()
  const state = useSelector((state) => state);
  console.log("state from summary >>>>> ", state);
  const { summaryLink } = router.query;

  const dispatch = useDispatch()
  
  let breadCrumb = {displayName:summaryLink,path:'summary/'+summaryLink}
  useEffect(() => {
    dispatch(addBreadcrumbs(breadCrumb))
  }, [])
  //dispatch(addBreadcrumbs(breadCrumb))
  const pages = state.persistedReducer.headerfooter.headerData.navs === undefined ? undefined :state.persistedReducer.headerfooter.headerData.navs[0];
  console.log("summaryLink  ::: ", summaryLink);
  
  console.log("pages from summary >>>> " ,pages);

  let subElements = null;

  pages && pages.elements.forEach((element)=>{
    if(element.url === summaryLink){
      subElements = element.target.elements;
      return subElements;
    }
  })

  return (<>
            <SummaryView subElements={subElements} summaryLink = {summaryLink}/>
        </>
    )
}

export default Summary

export async function getStaticProps(context) {
  console.log('context from getStaticProps summaryLink :::: ', context.params.summaryLink);
  return {
      props: {}
  }
}

  // This function gets called at build time
export async function getStaticPaths() {
  
  const res = await fetch(APPConfig.baseUrl + APPConfig.api.menu)
  const posts = await res.json()
  console.log("menu url getStaticPaths new :::: ",posts.navs[0]);
  const pages = posts.navs[0]
  const paths = pages && pages.elements.map((element,i)=>({
    params: { summaryLink: element.url}
  }))

  console.log('------------ SUMMARY PATHS ------------');
  console.log(paths);
  console.log('------------ SUMMARY PATHS ------------');
  
  return { paths, fallback: false }
}