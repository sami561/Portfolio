"use client";
import React, { useState } from "react";
// import Link from "next/link"; // Removed in favor of @/navigation
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { AiFillPhone } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/navigation";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("Header");

  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sami <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/#contact">
            <Button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`${hovered && "text-primary"} transition-all duration-500`}
            >
              {t("contactMe")}
            </Button>
          </Link>
          <ThemeToggle />
          <LanguageSwitcher />
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
