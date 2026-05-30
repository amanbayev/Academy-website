import {ArrowRight, BarChart3, BookOpen, Briefcase, Building2, Globe2, GraduationCap, Leaf, Network, Scale, ShieldCheck, Users} from 'lucide-react';
import {Card} from '@/components/ui/card';

const iconMap = {
  chart: BarChart3,
  scale: Scale,
  shield: ShieldCheck,
  network: Network,
  users: Users,
  leaf: Leaf,
  briefcase: Briefcase,
  book: BookOpen,
  building: Building2,
  graduation: GraduationCap,
  globe: Globe2
};

export function IconCard({icon = 'chart', title, text, cta}: {icon?: keyof typeof iconMap; title: string; text: string; cta?: string}) {
  const Icon = iconMap[icon];
  return (
    <Card className="group h-full transition hover:-translate-y-1 hover:shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-red-50 text-academy-red">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-5 text-base font-bold leading-6">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-academy-text">{text}</p>
      {cta ? <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-academy-red">{cta}<ArrowRight className="h-4 w-4" /></div> : null}
    </Card>
  );
}
