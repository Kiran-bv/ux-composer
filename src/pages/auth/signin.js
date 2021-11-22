// import React from 'react';
// import SigninSimple from '../../views/SigninSimple';

// const SigninSimplePage = () => {
//   return <SigninSimple />;
// };

// export default SigninSimplePage;


import SigninSimple from '../../views/SigninSimple';
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
  return (
    <>
      <SigninSimple {...providers}/>;
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

// import { getProviders, signIn } from "next-auth/react"

// export default function SignIn({ providers }) {
//   return (
//     <>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   )
// }

// // This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }


