import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({user, account, profile}) {
      const existingUser = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id })
      console.log(profile?.id)
      if (!existingUser) {    // need to write to database
        console.log("Saving to Sanity:", {
          _type: "author",
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          bio: profile?.bio || "",
          image: user?.image,
        });
        await writeClient.create({
          _type: "author",
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          bio: profile?.bio || "",
          image: user?.image,
        })
      }

      return true;
    }, 
    async jwt({token, account, profile}) {  // modify jwt token to add the account id to it
      if (account && profile) {
        const user = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });

        token.id = user?._id;
      }

      return token;
  },
  async session({session, token}) {
    Object.assign(session, {id: token.id});
    return session;
  },
}
})

// JSM Code
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [GitHub],
//   callbacks: {
//     async signIn({
//       user: { name, email, image },
//       profile: { id, login, bio },
//     }) {
//       const existingUser = await client
//         .withConfig({ useCdn: false })
//         .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
//           id,
//         });

//       if (!existingUser) {
//         await writeClient.create({
//           _type: "author",
//           id,
//           name,
//           username: login,
//           email,
//           image,
//           bio: bio || "",
//         });
//       }

//       return true;
//     },
//     async jwt({ token, account, profile }) {
//       if (account && profile) {
//         const user = await client
//           .withConfig({ useCdn: false })
//           .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
//             id: profile?.id,
//           });

//         token.id = user?._id;
//       }

//       return token;
//     },
//     async session({ session, token }) {
//       Object.assign(session, { id: token.id });
//       return session;
//     },
//   },
// });