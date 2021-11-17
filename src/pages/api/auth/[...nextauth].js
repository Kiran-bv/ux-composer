// import NextAuth from "next-auth"
// import {GithubProvider} from "next-auth/providers/github"
// import {GoogleProvider} from "next-auth/providers/google"
// //import Providers from "next-auth/providers"

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     })
//     ,
//     GoogleProvider({
//       clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_OAUTH_SECRET,
//     })
//     // ...add more providers here
//   ],
//   jwt: {
//     // A secret to use for key generation (you should set this explicitly)
//      secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
//     // Set to true to use encryption (default: false)
//     // encryption: true,
//     // You can define your own encode/decode functions for signing and encryption
//     // if you want to override the default behaviour.
//     // encode: async ({ secret, token, maxAge }) => {},
//     // decode: async ({ secret, token, maxAge }) => {},
//   },
// })


import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
             clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
             clientSecret: process.env.GOOGLE_OAUTH_SECRET,
           })
  ],
})
