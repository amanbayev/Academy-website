'use client';

import {useState} from 'react';
import type {Locale} from '@/i18n/routing';
import {Button} from '@/components/ui/button';

export function NewsletterForm({locale, submit, success}: {locale: Locale; submit: string; success: string}) {
  const [done, setDone] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') ?? '');
    const response = await fetch('/api/forms', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({type: 'newsletter', locale, source: 'newsletter', name: 'Newsletter subscriber', email, consent: true})
    });
    setDone(response.ok);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input name="email" required type="email" placeholder="Email" className="min-h-11 flex-1 rounded-md border-academy-border px-4 text-sm focus:border-academy-red focus:ring-academy-red" />
      <Button type="submit">{submit}</Button>
      {done ? <p className="self-center text-sm font-semibold text-green-700">{success}</p> : null}
    </form>
  );
}
