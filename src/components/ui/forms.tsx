import {cn} from '@/lib/utils';

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function TextField({label, className, ...props}: FieldProps) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        {...props}
        placeholder={label}
        className={cn('w-full rounded-md border-academy-border bg-white px-4 py-3 text-sm shadow-none focus:border-academy-red focus:ring-academy-red', className)}
      />
    </label>
  );
}

export function TextArea({label, className, ...props}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {label: string}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <textarea
        {...props}
        placeholder={label}
        className={cn('min-h-32 w-full rounded-md border-academy-border bg-white px-4 py-3 text-sm shadow-none focus:border-academy-red focus:ring-academy-red', className)}
      />
    </label>
  );
}

export function SelectField({label, children, className, ...props}: React.SelectHTMLAttributes<HTMLSelectElement> & {label: string}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        {...props}
        className={cn('w-full rounded-md border-academy-border bg-white px-4 py-3 text-sm shadow-none focus:border-academy-red focus:ring-academy-red', className)}
      >
        {children}
      </select>
    </label>
  );
}
