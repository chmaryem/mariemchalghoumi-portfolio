import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection, useScrolled } from "@/hooks/useActiveSection";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useT } from "@/i18n/ui";

const NAV_ITEMS = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "skills", key: "nav.skills" },
  { id: "education", key: "nav.education" },
  { id: "contact", key: "nav.contact" },
];

export default function Navbar() {
  const t = useT();
  const scrolled = useScrolled();
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="container-xl flex items-center justify-between h-20">
        <button
          onClick={() => handleClick("home")}
          className="font-mono text-sm tracking-[0.2em] text-fg focus-ring rounded"
          aria-label={t("nav.goHome")}
        >
          MC
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleClick(item.id)}
                className={`py-2 text-[13px] font-mono uppercase tracking-wider transition-colors focus-ring ${
                  active === item.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {t(item.key)}
              </button>
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute left-0 right-0 -bottom-0.5 h-px bg-azure"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LanguageSwitch />
        </div>

        <button
          className="md:hidden p-2 text-fg focus-ring rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-b border-line"
          >
            <ul className="container-xl py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full text-left px-1 py-3 text-sm font-mono uppercase tracking-wider focus-ring ${
                      active === item.id ? "text-fg" : "text-muted"
                    }`}
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <LanguageSwitch />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}