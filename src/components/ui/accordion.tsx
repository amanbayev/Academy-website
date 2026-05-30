'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';

export function Accordion({items}: {items: Array<{title: string; content: React.ReactNode; meta?: string}>}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-academy-border rounded-lg border border-academy-border bg-white">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span>
              <span className="font-semibold">{item.title}</span>
              {item.meta ? <span className="ml-3 text-sm text-academy-text">{item.meta}</span> : null}
            </span>
            <ChevronDown className={cn('h-4 w-4 text-academy-red transition', open === index && 'rotate-180')} />
          </button>
          {open === index ? <div className="px-5 pb-5 text-sm leading-6 text-academy-text">{item.content}</div> : null}
        </div>
      ))}
    </div>
  );
}
