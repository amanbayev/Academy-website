'use client';

import {useEffect, useRef} from 'react';
import type {CSSProperties} from 'react';
import {ArrowRight} from 'lucide-react';

type ScrollParallaxBrandProps = {
  label: string;
  title: string;
  text: string;
  primary: string;
  secondary: string;
  href: string;
};

export function ScrollParallaxBrand({label, title, text, primary, secondary, href}: ScrollParallaxBrandProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const available = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / available));
      section.style.setProperty('--parallax-progress', progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, {passive: true});
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="parallax-brand relative h-[190vh] bg-[#111315] text-white"
      style={{'--parallax-progress': 0} as CSSProperties}
    >
      <div className="sticky top-0 flex h-screen min-h-[660px] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(212,5,53,0.18),transparent_28%),linear-gradient(180deg,#151719_0%,#0e1012_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="container-page relative z-10 grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="parallax-brand-copy max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-academy-red">{label}</p>
            <h2 className="mt-5 text-[40px] font-extrabold leading-[1.04] tracking-normal md:text-[62px]">{title}</h2>
            <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">{text}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={href} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-academy-red px-7 text-sm font-bold text-white">
                {primary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-7 text-sm font-bold text-white/85">
                {secondary}
              </span>
            </div>
          </div>

          <div className="parallax-brand-stage relative min-h-[360px] md:min-h-[520px]">
            <div className="parallax-orbit parallax-orbit-one" />
            <div className="parallax-orbit parallax-orbit-two" />
            <img
              src="/images/academy-arc-assemble.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="parallax-brand-media relative z-10 mx-auto w-full max-w-[780px] rounded-[18px] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
