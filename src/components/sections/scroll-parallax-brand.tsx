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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    let frame = 0;
    let duration = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const available = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / available));
      section.style.setProperty('--parallax-progress', progress.toFixed(4));

      if (video && duration > 0 && Number.isFinite(duration)) {
        const nextTime = Math.min(duration - 0.02, Math.max(0, progress * duration));
        if (Math.abs(video.currentTime - nextTime) > 0.035) {
          video.currentTime = nextTime;
        }
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const handleMetadata = () => {
      duration = video?.duration || 0;
      requestUpdate();
    };

    if (video) {
      video.pause();
      video.addEventListener('loadedmetadata', handleMetadata);
      if (video.readyState >= 1) handleMetadata();
    }

    update();
    window.addEventListener('scroll', requestUpdate, {passive: true});
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      video?.removeEventListener('loadedmetadata', handleMetadata);
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
        <video
          ref={videoRef}
          className="parallax-brand-video absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/images/academy-arc-assemble.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,5,53,0.08),transparent_30%),linear-gradient(90deg,rgba(14,16,18,0.82)_0%,rgba(14,16,18,0.48)_42%,rgba(14,16,18,0.2)_100%),linear-gradient(180deg,rgba(14,16,18,0.26)_0%,rgba(14,16,18,0.5)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="container-page relative z-10 w-full">
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
        </div>

        <div className="parallax-brand-progress absolute bottom-8 left-1/2 z-10 h-px w-[min(420px,70vw)] -translate-x-1/2 overflow-hidden bg-white/20">
          <div className="h-full origin-left bg-academy-red" />
        </div>
      </div>
    </section>
  );
}
