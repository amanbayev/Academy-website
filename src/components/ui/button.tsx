import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  className?: string;
  type?: 'button' | 'submit';
};

export function Button({href, children, variant = 'primary', className, type = 'button'}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-3 rounded-md px-6 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-academy-red focus:ring-offset-2',
    variant === 'primary' && 'bg-academy-red text-white hover:bg-[#b9002d]',
    variant === 'secondary' && 'border border-academy-red bg-white text-academy-red hover:bg-red-50',
    variant === 'ghost' && 'text-academy-red hover:text-[#b9002d]',
    variant === 'dark' && 'bg-white text-academy-black hover:bg-gray-100',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
