import {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import APPConfig from '../../../appConfig';
import Head from 'next/head'

import useSWR from 'swr';
import DetailsView from '../../views/DetailsView';

const fetcher = (url,payload) => fetch(url,payload).then((res) => res.json())

const ItemDetails = () => {
  console.log('from ItemDetails page');
  const router = useRouter()
  const { org,itemrecordslug } = router.query
  const[viewDetails, setViewDetails] = useState({});

  let recordViewPayload = {"schema":localStorage.getItem('schema'),"dependentSchema":localStorage.getItem('dependentSchema'),
  "recordId":itemrecordslug,"org":org};
  
  let url = "https://localhost:9500/generic/getSchemaRecordForView?data="+JSON.stringify(recordViewPayload)
  console.log('URL :::: ', url);
  const { data, error } = useSWR(url, fetcher);

  if (!data) return <div>loading...</div>

  console.log("Data from useSwr", data);

  // useEffect(async ()=>{
  //   const res12 = await fetch('https://localhost:9500/generic/getSchemaRecordForView', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(recordViewPayload)
  //     });
  //     const viewData = await res12.json()
  //     console.log("getSchemaRecordForView  response JSON Data :::::: ", viewData);
  //     setViewDetails(viewData);
  // },[])

  return (<>
              <Head>
                <title>{data && data.record && data.record.record_header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
              <DetailsView viewDetails={data}/>
          </>
  )
}

export default ItemDetails
