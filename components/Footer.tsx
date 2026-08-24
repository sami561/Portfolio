"use client";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="px-6 xl:px-14 py-7 border-t border-border text-center font-mono text-[13px] text-muted-2">
      {t("text")}
    </footer>
  );
};

export default Footer;
