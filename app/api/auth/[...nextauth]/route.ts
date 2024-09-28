import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

console.log("process.env.TWITTER_CLIENT_ID", process.env.TWITTER_CLIENT_ID);
console.log(
  "process.env.TWITTER_CLIENT_SECRET",
  process.env.TWITTER_CLIENT_SECRET
);

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
