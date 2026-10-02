// OPTION B — "Editorial split": full-bleed portrait on one side (like the
// Hero's visual language but static, no ring), large pull-quote style
// statement on the other. More magazine-like, less "dashboard panel".
import { motion } from "framer-motion";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";
import { useLang } from "@/i18n/LanguageContext";

// Self-contained bilingual labels for this block — not routed through
// ui.ts, so this section never depends on that dictionary being in sync.
const LABELS = {
  en: { basedIn: "Based in", focus: "Focus", focusValue: "Software × AI", currently: "Currently", location: "Tunisia" },
  fr: { basedIn: "Basée en", focus: "Focus", focusValue: "Logiciel × IA", currently: "Actuellement", location: "Tunisie" },
};

export default function AboutOptionB() {
  const t = useT();
  const { lang } = useLang();
  const l = LABELS[lang];
  const { aboutStory } = useContent();
  const current = aboutStory[aboutStory.length - 1];

  return (
    <section id="about" className="relative py-28 md:py-0 bg-ink">
      <div className="grid md:grid-cols-2 md:min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 md:order-1 h-[50vh] md:h-auto"
        >
          <img
            src="/assets/profile.png"
            alt="Mariem Chalghoumi"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 12%" }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-ink/10" />
        </motion.div>

        <div className="order-1 md:order-2 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-16 md:py-0">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-azure text-xs tracking-[0.2em] uppercase block mb-6"
          >
            {t("about.kicker")}
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-fg leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-lg"
          >
            {t("about.h1")} {t("about.h2")}
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted leading-relaxed max-w-md mt-8"
          >
            {t("about.text")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-line max-w-md space-y-3"
          >
            <p className="text-sm text-fg">
              <span className="font-mono text-[11px] text-muted mr-3">{l.basedIn}</span>
              {l.location}
            </p>
            <p className="text-sm text-fg">
              <span className="font-mono text-[11px] text-muted mr-3">{l.focus}</span>
              {l.focusValue}
            </p>
            <p className="text-sm text-fg leading-relaxed">
              <span className="font-mono text-[11px] text-muted mr-3 block mb-1">{l.currently}</span>
              {current.detail}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 font-mono text-[11px] text-muted/70 tracking-wide leading-relaxed max-w-md"
          >
            {aboutStory.map((s, i) => (
              <span key={s.label}>
                {s.label}
                {i < aboutStory.length - 1 && <span className="text-azure/60 mx-2">→</span>}
              </span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}