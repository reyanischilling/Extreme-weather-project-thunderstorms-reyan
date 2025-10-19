import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  onScrollClick: () => void;
}

export default function Hero({ title, subtitle, backgroundVideo, backgroundImage, onScrollClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Explicitly set muted
      video.play().catch(err => {
        console.error("Video autoplay failed:", err);
        setAutoplayFailed(true);

        // Allow a user interaction to try again
        const handleInteraction = () => {
          video.play()
            .then(() => setAutoplayFailed(false))
            .catch(e => console.error(e));
          document.removeEventListener('click', handleInteraction);
        };
        document.addEventListener('click', handleInteraction);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundVideo ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              willChange: 'transform',
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>

          {autoplayFailed && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button
                aria-label="Play background video"
                onClick={() => {
                  const v = videoRef.current;
                  if (v) {
                    v.muted = false;
                    v.play().then(() => setAutoplayFailed(false)).catch(console.error);
                  }
                }}
                className="rounded-full bg-white/80 p-6 shadow-lg"
              >
                ▶
              </button>
            </div>
          )}
        </>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {subtitle}
        </p>
      </div>

      <button
        onClick={onScrollClick}
        data-testid="button-scroll-down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
