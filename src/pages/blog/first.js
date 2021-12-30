import { useRouter } from 'next/router';
const First = () => {
 console.log('from First page');
  const router = useRouter();
  const { id } = router.query

    return(
        <h2>First page id is :: {id}</h2>
    )
}

export default First;