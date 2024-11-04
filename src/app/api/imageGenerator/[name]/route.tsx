import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Use the edge runtime for faster response

interface ParamsType {
  params: { name: string };
}

export async function GET(req: NextRequest, { params }: ParamsType) {
  const name = params.name || "NoName"; // Default to "NoName" if no name is provided

  // Return the generated image
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '400px',
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#333333',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {name}
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}