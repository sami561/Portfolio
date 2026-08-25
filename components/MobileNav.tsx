"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

const MobileNav = () => {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");

  const links = [
    { name: t("home"), path: "/#home" },
    { name: t("resume"), path: "/#resume" },
    { name: t("projects"), path: "/#personal-project" },
    { name: t("work"), path: "/#work" },
    { name: t("contact"), path: "/#contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-background border-border">
        <div className="mt-24 mb-16 text-center">
          <Link href="/">
            <span className="font-mono font-semibold text-[26px]">
              sami<span className="text-accent">.</span>dev
            </span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-7">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="font-mono text-base lowercase hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="font-mono text-[13px] font-semibold bg-accent text-accent-foreground px-[22px] py-[11px] rounded-full"
          >
            {tHeader("contactMe")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
