import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET ?? "",
        }),
    ],
};

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    console.log(session);
    return NextResponse.json({
        id: 1,
    });
}