import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET ?? "",
        }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
