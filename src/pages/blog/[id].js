import { useRouter } from 'next/router';
const Test = () => {
 console.log('from Test page');
  const router = useRouter();
  const { id } = router.query

    return(
        <h2>Id page :: {id}</h2>
    )

}

export default Test;

// export async function getStaticProps(context) {
//    return {
//      props: {}, // will be passed to the page component as props
//    }
//  }
//  export async function getStaticPaths() {
//    return {
//      paths: [
//        { params: { id:'12' } },
//        { params: { id:'23' } } // See the "paths" section below
//      ],
//      fallback: false // See the "fallback" section below
//    };
//  }