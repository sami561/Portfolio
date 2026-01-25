"use client";

import { usePathname } from "next/navigation"; // Keep standard or use navigation.ts?
// Actually if I use Link from navigation.ts, I should use usePathname from navigation.ts for consistency in matching.
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const links = [
    {
      name: t("home"),
      path: "/#home",
    },
    /*   {
    name: "services",
    path: "/services",
  }, */
    {
      name: t("resume"),
      path: "/#resume",
    },
    {
      name: t("work"),
      path: "/#work",
    },
    {
      name: t("projects"),
      path: "/#personal-project",
    },
    {
      name: t("contact"),
      path: "/#contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sami <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${link.path == pathname && "text-accent border-b-2 border-accent "
                }text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
