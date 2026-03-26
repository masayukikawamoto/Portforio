import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-dark-border mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-muted">
            &copy; {new Date().getFullYear()} MASA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-muted hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <Link
              href="/work"
              className="text-sm text-dark-muted hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-dark-muted hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
