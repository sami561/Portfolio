"use client";
import { Link } from "@/navigation"; // Use typed Link
import { usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

const Nav = () => {
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
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all  `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
