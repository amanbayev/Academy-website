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
      <Icon className="h-8 w-8 text-academy-red" aria-hidden />
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-academy-text">{text}</p>
      {cta ? <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-academy-red">{cta}<ArrowRight className="h-4 w-4" /></div> : null}
    </Card>
  );
}
