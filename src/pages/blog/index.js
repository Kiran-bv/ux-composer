import { useRouter } from 'next/router';
const Test = () => {
 console.log('from Test page');
  const router = useRouter();
  const { id } = router.query

    return(
        <h2>Test page</h2>
    )

}

export default Test;