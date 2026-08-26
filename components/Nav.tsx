"use client";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Nav = () => {
  const t = useTranslations("Nav");

  const links = [
    { name: t("home"), path: "/#home" },
    { name: t("resume"), path: "/#resume" },
    { name: t("work"), path: "/#work" },
    { name: t("projects"), path: "/#personal-project" },
    { name: t("contact"), path: "/#contact" },
  ];

  return (
    <nav className="flex items-center gap-10">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="font-mono text-sm lowercase text-foreground hover:text-accent transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
