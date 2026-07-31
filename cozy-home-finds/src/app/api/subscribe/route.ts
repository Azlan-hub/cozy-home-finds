import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // These will be pulled securely from your environment variables
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const BASE_URL = 'https://api.convertkit.com/v3';

    // Send the email to ConvertKit
    const response = await fetch(`${BASE_URL}/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email: email,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }
}
