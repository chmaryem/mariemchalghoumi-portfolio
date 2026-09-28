import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/ui";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-xl py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-fg">{profile.name}</p>
          <p className="text-muted text-sm">{t("footer.tagline")}</p>
        </div>

        <div className="flex items-center gap-5 text-muted">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg transition-colors focus-ring rounded p-1">
            <Linkedin size={18} />
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg transition-colors focus-ring rounded p-1">
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg transition-colors focus-ring rounded p-1">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted text-xs">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}