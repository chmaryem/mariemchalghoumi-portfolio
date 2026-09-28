import { useLang, type Lang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/ui";

const OPTIONS: Lang[] = ["en", "fr"];

export default function LanguageSwitch() {
  const { lang, setLang } = useLang();
  const t = useT();

  return (
    <div className="flex items-center gap-1 font-mono text-[12px] tracking-wider" role="group" aria-label={t("lang.label")}>
      {OPTIONS.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted/40">|</span>}
          <button
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`px-1 py-1 uppercase transition-colors focus-ring ${
              lang === code ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}