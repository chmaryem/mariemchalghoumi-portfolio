import { motion } from "framer-motion";
import { useT } from "@/i18n/ui";

export default function PersonalBrand() {
  const t = useT();
  return (
    <section className="relative py-28 md:py-36 bg-panel/40 overflow-hidden">
      <div className="container-xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative rounded-lg overflow-hidden border border-line max-w-sm mx-auto md:mx-0">
            <img
              src="/assets/profile.png"
              alt="Mariem Chalghoumi, software engineer"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "50% 12%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(5,7,11,0.6) 100%)",
              }}
            />
          </div>
          <div
            className="absolute -z-10 -inset-6 rounded-[2rem] blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #7C6CF2, transparent 70%)" }}
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("brand.kicker")}</span>
          <p className="font-display font-semibold text-2xl sm:text-3xl text-fg leading-snug mt-4">
            {t("brand.quote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}