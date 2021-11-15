import GenericTable from '../../components/GenericTable';
import AppConfig from '../../appConfig';
import Head from 'next/head'
//import Main from '../layouts/Main';
import Box from '@mui/material/Box';
import Container from '../../components/Container';
export default function Table(props){

    return(
       <>
        <Head>
            <title>Table Demo With Next</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
        <GenericTable/>
        </Container>
        </Box>
        </> 
    )

}

/*export async function getStaticProps() {
    const res = await fetch(AppConfig.baseUrl+AppConfig.api.table);
    const data = await res.json();
    console.log("getStaticProps ########## Table JSON Data :::::: ", data);
    return {
        props: { users: data }
    },
    revalidate:60*60*6
}*/


// export async function getServerSideProps(context) {
//     const res = await fetch(AppConfig.baseUrl+AppConfig.api.table);
//     const data = await res.json();
//     console.log("getServerSideProps ::: ########## Table JSON Data :::::: ", data);
//     return {
//         props: { users: data }
//     }
// }

