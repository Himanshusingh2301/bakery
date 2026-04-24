import { useEffect, useState } from "react";
import heroBackground from "../assets/hero-cake.jpg";

const featuredSlides = [
  {
    title: "Signature Sourdough",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Butter Croissant Box",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rustic Whole Wheat",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Morning Pastry Selection",
    image:
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Freshly Baked Daily",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % featuredSlides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7ecdf]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(52, 25, 7, 0.56) 0%, rgba(52, 25, 7, 0.38) 34%, rgba(52, 25, 7, 0.12) 62%, rgba(52, 25, 7, 0.04) 100%), url(${heroBackground})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,208,128,0.12),_transparent_34%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-[#f0c89b]/60 bg-[#fff6eb]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#ffe4bf]">
            Fresh From The Oven
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            Fresh Bakes, Daily
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#f9e6d2] sm:text-lg">
            Warm breads and pastries made fresh every day.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-[#d99145] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-[#bc7633]"
            >
              Shop Fresh Bakes
            </button>
            <button
              type="button"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Explore Menu
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:justify-self-end">
          <div className="overflow-hidden rounded-[28px] border border-white/25 bg-[#fff9f2]/90 p-4 shadow-[0_30px_80px_rgba(28,15,4,0.35)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between px-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b7793a]">
                  Featured Picks
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#4a240c]">
                  {featuredSlides[activeSlide].title}
                </h2>
              </div>
              <span className="rounded-full bg-[#4a240c] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                0{activeSlide + 1}
              </span>
            </div>

            <div className="relative h-[380px] overflow-hidden rounded-[24px] bg-[#f1dfcc]">
              {featuredSlides.map((slide, index) => (
                <img
                  key={slide.title}
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    index === activeSlide
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 px-2">
              <p className="text-sm font-medium text-[#6f4a2b]">
                Rotating through our most-loved breads and pastry specials.
              </p>
              <div className="flex items-center gap-2">
                {featuredSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide ? "w-8 bg-[#b7793a]" : "w-2.5 bg-[#d8b28a]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
