import { useRouter } from 'next/router'

const SummaryDetails = () => {
  const router = useRouter()
  const { productType } = router.query;

  console.log("Summary Details :::: " , router.query);

  return <p>SummaryDetails :: {productType}</p>
}

export default SummaryDetails