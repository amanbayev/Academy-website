'use client';

import {useEffect, useRef} from 'react';
import type {CSSProperties} from 'react';

export function ScrollParallaxBrand() {
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
      className="parallax-brand relative h-[420vh] bg-[#111315] text-white"
      style={{'--parallax-progress': 0} as CSSProperties}
    >
      <div className="sticky top-0 h-screen min-h-[660px] overflow-hidden">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,5,53,0.05),transparent_34%),linear-gradient(180deg,rgba(14,16,18,0.08)_0%,rgba(14,16,18,0.18)_100%)]" />

        <div className="parallax-brand-progress absolute bottom-8 left-1/2 z-10 h-px w-[min(420px,70vw)] -translate-x-1/2 overflow-hidden bg-white/20">
          <div className="h-full origin-left bg-academy-red" />
        </div>
      </div>
    </section>
  );
}
