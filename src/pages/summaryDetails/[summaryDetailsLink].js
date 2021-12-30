import {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import {api} from '../../scripts/api';
import APPConfig from '../../../appConfig';
import Head from 'next/head'

import SummaryDetailsView from '../../views/SummaryDetails';

const SummaryDetails = ({schemaRecords,displayObject,schemaRecordsCount,payload,applicableFilters}) => {
  const router = useRouter()
  const { summaryDetailsLink } = router.query;

  console.log('displayObject :::: ', displayObject);

  localStorage.setItem('schema',displayObject.target.schema);
  localStorage.setItem('dependentSchema',displayObject.target.dependentSchema);
  console.log("Summary Details >>>>> :::: <<<<<< " , schemaRecords);
  console.log("schemaRecordsCount ::: ", schemaRecordsCount);
  console.log("Applicable Filters ::: ", applicableFilters);

  return(
    <>
      <Head>
        <title>{summaryDetailsLink}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SummaryDetailsView schemaRecords={schemaRecords} summaryDetailsLink={summaryDetailsLink} schemaRecordsCount={schemaRecordsCount} applicableFilters={applicableFilters} payload={payload}/>
    </>
  )
}

export default SummaryDetails;

export async function getStaticProps(context) {
  //console.log("123:::@@@@::::@@@@: Context data from getStaticPaths all :::: ", context);
  //console.log(":::@@@@::::@@@@: Context data from getStaticPaths test :::: ", context.params.test);
  console.log('context from getStaticProps summaryDetailsLink :::: ', context.params.summaryDetailsLink);
  const res = await api.getProductInfo(context.params.summaryDetailsLink);
  let p2 =  {displayName: context.params.summaryDetailsLink};
  
  //const res12 = await fetch(APPConfig.baseUrl + '/api/menu-new',{displayName:'Spouts'})

  const res12 = await fetch(APPConfig.baseUrl+"/api/menu-new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(p2)
  });
  const displayObject = await res12.json()
  console.log("displayObject  response JSON Data :::::: ", displayObject);
  let data = displayObject;
              let payload = {
                             schema: data.target.schema,
                             filters: data.target.filters,
                             dependentSchema: data.target.dependentSchema,
                             "org":data.navType,
                             "skip":0,
                             "limit":24,
                             "sortBy":"displayPriority",
                             "sortOrder":"descend"
                          }      
              
  let schemaRecords =  await api.getSchemaRecords(payload);

  let totalCountPayload = {
    "forCounts":true,
    schema: data.target.schema,
    filters: data.target.filters,
    dependentSchema: data.target.dependentSchema,
    "org":data.navType
  }
  let schemaRecordsCount =  await api.getSchemaRecordCount(totalCountPayload);

  let filtersPayload = {
    schema: data.target.schema,
    selectedFilters: data.target.filters,
    dependentSchema: data.target.dependentSchema,
    allFilters: schemaRecords.schema['@filterKeys']
  };
  console.log("filtersPayload :::",filtersPayload);
  let applicableFilters =  await api.getApplicableFilters(filtersPayload);
  
  return {
      props: { 
        summaryDetails: res,schemaRecords:schemaRecords,
        displayObject:displayObject,
        schemaRecordsCount:schemaRecordsCount,
        payload:payload,
        applicableFilters:applicableFilters
      }

  }
}

export async function getStaticPaths() {
  
  const res = await fetch(APPConfig.baseUrl + APPConfig.api.menu)
  const posts = await res.json()
  console.log("menu url getStaticPaths new :::: ",posts.navs[0]);
  const pages = posts.navs[0]
  let paths = [];
  pages.elements.forEach((element)=>{
    element.target.elements.forEach(ele => {
      ele.target.elements && ele.target.elements.forEach(subEle =>{
          let obje = {params: {summaryDetailsLink: subEle.displayName,payload:subEle}}
          paths.push(obje);
        })
    })
  })

  console.log("###### pathNew ########");
  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}