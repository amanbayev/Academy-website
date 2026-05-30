import {cn} from '@/lib/utils';

export function Card({children, className}: {children: React.ReactNode; className?: string}) {
  return <div className={cn('rounded-lg border border-academy-border bg-white p-6 shadow-[0_8px_26px_rgba(17,24,39,0.035)]', className)}>{children}</div>;
}
