import { useEffect, useState } from "react";
import { Menu, MessageCircleMore, ShoppingCart, User, X } from "lucide-react";
import bakeryLogo from "../assets/bakery-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  const navItems = ["HOME", "ABOUT", "PRODUCTS", "CONTACT"];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (!isMenuOpen) {
        setIsVisible(currentScrollY < lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        hasLoaded ? "opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5 text-white md:px-10 md:py-4 lg:px-16">
        <button
          type="button"
          className={`flex items-center text-white transition-all delay-100 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            hasLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          aria-label="Open navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={26} strokeWidth={2.2} /> : <Menu size={26} strokeWidth={2.2} />}
        </button>

        <ul
          className={`hidden flex-1 items-center gap-10 text-[15px] font-semibold tracking-[0.12em] transition-all delay-150 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex lg:gap-14 ${
            hasLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer transition hover:text-[#efc28d]">
              {item}
            </li>
          ))}
        </ul>

        <a
          href="/"
          className={`mx-auto px-4 outline-none ring-0 border-0 shadow-none transition-all delay-200 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 md:px-8 ${
            hasLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          aria-label="Bakery home"
        >
          <img
            src={bakeryLogo}
            alt="Bakery logo"
            className="h-14 w-auto border-0 object-contain shadow-none outline-none ring-0 brightness-[1.03] sm:h-16 md:h-20 lg:h-24"
          />
        </a>

        <div
          className={`hidden flex-1 items-center justify-end gap-6 text-[15px] font-semibold tracking-[0.08em] transition-all delay-[260ms] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex lg:gap-10 ${
            hasLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 whitespace-nowrap">
            <MessageCircleMore size={18} className="text-[#efc28d]" strokeWidth={2.4} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <User size={18} className="text-[#efc28d]" strokeWidth={2.4} />
            <span>MY ACCOUNT</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/0 px-4 py-2 transition hover:bg-white/10"
          >
            <ShoppingCart size={20} className="text-[#efc28d]" strokeWidth={2.4} />
            <span>CART</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#3b2113] px-5 py-5 text-white md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-semibold tracking-[0.14em]">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer transition hover:text-[#efc28d]">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 space-y-4 border-t border-white/10 pt-5 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <MessageCircleMore size={18} className="text-[#efc28d]" strokeWidth={2.4} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <User size={18} className="text-[#efc28d]" strokeWidth={2.4} />
              <span>MY ACCOUNT</span>
            </div>
            <div className="flex items-center gap-3">
              <ShoppingCart size={18} className="text-[#efc28d]" strokeWidth={2.4} />
              <span>CART</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
