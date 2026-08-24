"use client";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/navigation";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-40 nav-blur border-b border-border">
      <div className="flex items-center justify-between px-6 xl:px-14 py-[22px]">
        <Link href="/">
          <span className="font-mono font-semibold text-[22px] leading-none">
            sami<span className="text-accent">.</span>dev
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
        </div>
        <div className="hidden xl:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="font-mono text-[13px] font-semibold bg-accent text-accent-foreground px-[22px] py-[11px] rounded-full hover:bg-accent-hover transition-colors"
          >
            {t("contactMe")}
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
