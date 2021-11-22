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
  NEXTAUTH_URL: 'http://localhost:3000',
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
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    }
  },
  pages:{
    signIn: '/auth/signin',
    signOut: '/auth/signout'
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "https://www.wishkarma.com/landing-banner.jpg" // Absolute URL to image
  },
  redirect({ url, baseUrl   }) {

    console.log("url from redirect :::: " , url);
    console.log("baseUrl from redirect :::: " , baseUrl);

    if (url.startsWith(baseUrl)){
      return url
    } 
    // Allows relative callback URLs
    else if (url.startsWith("/")) {
      return new URL(url, baseUrl).toString()
    }
    return baseUrl
  }
})
