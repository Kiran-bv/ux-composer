import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { productType } = router.query

  return <p>Product Type :: {productType}</p>
}

export default Product