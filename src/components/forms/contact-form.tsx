'use client';

import {useState} from 'react';
import type {Locale} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {SelectField, TextArea, TextField} from '@/components/ui/forms';

type Labels = {
  name: string;
  company: string;
  position?: string;
  email: string;
  phone: string;
  topic: string;
  priority?: string;
  message: string;
  consent: string;
  submit: string;
  success: string;
  error: string;
};

export function ContactForm({locale, source, labels, type = 'contact'}: {locale: Locale; source: string; labels: Labels; type?: string}) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const payload = {
      type,
      locale,
      source,
      name: String(formData.get('name') ?? ''),
      company: String(formData.get('company') ?? ''),
      position: String(formData.get('position') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      topic: String(formData.get('topic') ?? ''),
      priority: String(formData.get('priority') ?? ''),
      message: String(formData.get('message') ?? ''),
      consent: formData.get('consent') === 'on'
    };

    const response = await fetch('/api/forms', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });

    setStatus(response.ok ? 'success' : 'error');
    setLoading(false);
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label={labels.name} name="name" required />
        <TextField label={labels.company} name="company" />
        {labels.position ? <TextField label={labels.position} name="position" /> : null}
        <TextField label={labels.email} name="email" type="email" required />
        <TextField label={labels.phone} name="phone" />
        {labels.priority ? <TextField label={labels.priority} name="priority" /> : null}
      </div>
      <SelectField label={labels.topic} name="topic">
        <option value="program">{labels.topic}</option>
        <option value="corporate">Corporate training</option>
        <option value="university">University partnership</option>
        <option value="events">Events</option>
        <option value="media">Media / partnership</option>
      </SelectField>
      <TextArea label={labels.message} name="message" />
      <label className="flex gap-3 text-sm text-academy-text">
        <input name="consent" type="checkbox" required className="mt-1 rounded border-academy-border text-academy-red focus:ring-academy-red" />
        <span>{labels.consent}</span>
      </label>
      <div>
        <Button type="submit">{loading ? '...' : labels.submit}</Button>
      </div>
      {status === 'success' ? <p className="text-sm font-semibold text-green-700">{labels.success}</p> : null}
      {status === 'error' ? <p className="text-sm font-semibold text-academy-red">{labels.error}</p> : null}
    </form>
  );
}
