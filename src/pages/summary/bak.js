import { useRouter } from 'next/router';
import APPConfig from '../../../appConfig';
import {api} from '../../scripts/api'

const Product = ({productInfo}) => {
  const router = useRouter()
  const { productType } = router.query

  console.log("Product Info ::: ", productInfo);

  return <p>Product Main Type :: {productType}</p>
}

export default Product

export async function getStaticProps(context) {

  console.log('context from getStaticProps :::: ', context.params.productType);
  const res = await api.getProductInfo('all-diverters');
  console.log("getStaticProps ########## getProductInfo JSON Data :::::: ", res);

  return {
      props: { productInfo: res}
  }
}

  // This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  
  const res = await fetch(APPConfig.baseUrl + APPConfig.api.menu)
  const posts = await res.json()
  console.log("menu url getStaticPaths new :::: ",posts.navs[0]);
  const pages = posts.navs[0]
  // Get the paths we want to pre-render based on posts
  
  const paths = pages && pages.elements.map((element,i)=>({
    params: { productType: element.url }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}