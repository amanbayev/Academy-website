import {NextResponse} from 'next/server';
import {formSchema} from '@/lib/forms';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = formSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ok: false, errors: parsed.error.flatten().fieldErrors}, {status: 400});
  }

  console.info('AIFC Academy form submission stub', {
    type: parsed.data.type,
    locale: parsed.data.locale,
    source: parsed.data.source,
    email: parsed.data.email
  });

  return NextResponse.json({ok: true});
}
