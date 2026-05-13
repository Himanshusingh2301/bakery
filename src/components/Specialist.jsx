import { useEffect, useRef, useState } from "react";
import breakfastMenuIcon from "../assets/breakfast-menu-icon.png";
import breadsIcon from "../assets/breads-icon.png";
import cateringIcon from "../assets/catering-icon.png";
import customCakesIcon from "../assets/custom-cakes-icon.png";
import hotDrinksIcon from "../assets/hot-drinks-icon.png";
import hotTablesIcon from "../assets/hot-tables-icon.png";

const specialties = [
  {
    title: "Catering",
    description:
      "We offer catering for events of all types and parties of all sizes. Need delivery? No problem! Coming soon!",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    icon: cateringIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Breakfast Menu",
    description:
      "Our breakfast options include: toast, sandwiches, omelettes, and waffles. We carry a variety of options!",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    icon: breakfastMenuIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Custom Cakes",
    description:
      "Whether it's for a birthday, anniversary, retirement or just because you wanted cake at your event, we cater to all!",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    icon: customCakesIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Hot Tables",
    description:
      "Planning a lunch or dinner date? Check out our Hot Tables & Sides menu! Bring your friends & family and come join us at RBakery!",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    icon: hotTablesIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Breads",
    description:
      "Choose your favourite type of bread, from Croissants, Pecan raisin loaf, Altamura Puglia bread to Portuguese corn bread, we bake them all!",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    icon: breadsIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Hot Drinks",
    description:
      "RBakery offers a wide selection of coffees from traditional style Cappuccino, latte's, espresso & herbal tea's!",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    icon: hotDrinksIcon,
    iconClassName: "h-28 w-28 sm:h-32 sm:w-32",
  },
];

function SpecialtyCard({ item, isVisible, delay = 0, className = "" }) {
  return (
    <article
      className={`group relative aspect-[0.92/1] w-full max-w-[380px] shrink-0 snap-center overflow-hidden rounded-[24px] bg-[#2d1c14] shadow-[0_22px_60px_rgba(48,24,10,0.18)] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[28px] lg:rounded-[32px] ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-12 scale-95 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,13,5,0.24)_0%,rgba(28,13,5,0.48)_48%,rgba(28,13,5,0.76)_100%)]" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-5 py-6 text-center text-white transition-transform duration-700 ease-out group-hover:scale-105 sm:px-7 sm:py-7 lg:p-8">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className={`${item.iconClassName} mb-5 object-contain transition-transform duration-700 ease-out group-hover:scale-110 sm:mb-6 lg:mb-8`}
        />
        <h3 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/90 sm:mt-4 sm:max-w-[19rem] sm:text-[15px] sm:leading-7 lg:text-base">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function Specialist() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % specialties.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-16 sm:px-6 sm:py-18 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mx-auto h-1 w-24 rounded-full bg-[#c8986b]" />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.45em] text-[#9a6642]">
            Specialties
          </p>
          <h2
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-[2rem] leading-tight font-semibold text-[#a9683b] sm:text-[2.25rem] md:text-4xl"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            <span>Bakers make the world smell & taste better</span>
            <span className="inline-flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
              <dotlottie-wc
                src="https://lottie.host/feee25b1-53ad-4c10-a316-f8e2fdbfe482/77TRJV4iS8.lottie"
                autoplay
                loop
                speed="1"
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 md:hidden">
          <div className="mx-auto w-full max-w-[408px] overflow-hidden px-3 sm:px-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {specialties.map((item, index) => (
                <div key={item.title} className="w-full shrink-0 px-1.5">
                  <SpecialtyCard
                    item={item}
                    isVisible={hasEnteredView}
                    delay={index * 220}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {specialties.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-[#a9683b]"
                    : "w-2.5 bg-[#d8b28a]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 hidden max-w-6xl grid-cols-2 justify-items-center gap-6 md:grid lg:mt-14 lg:gap-8 xl:grid-cols-3">
          {specialties.map((item, index) => (
            <SpecialtyCard
              key={item.title}
              item={item}
              isVisible={hasEnteredView}
              delay={index * 220}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
