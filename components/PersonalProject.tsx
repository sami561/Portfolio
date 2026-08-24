"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const stack = "Redux, ReduxSaga, Next.js, React.js, Express, MongoDB, Redis";

const PersonalProject: React.FC = () => {
    const t = useTranslations("PersonalSection");

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-10 xl:gap-14 items-center">
            <div>
                <div className="font-mono text-accent text-[60px] font-bold mb-2 leading-none">
                    01
                </div>
                <div className="section-label">{t("label")}</div>
                <h2 className="text-[30px] xl:text-[38px] font-bold leading-[1.2] mb-6">
                    {t("title")}
                </h2>
                <p className="text-base leading-[1.7] text-muted mb-7">
                    {t("description")}
                </p>
                <div className="font-mono text-sm text-accent border-t border-border pt-5">
                    {stack}
                </div>
            </div>
            <a
                href="https://e-citoyen.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[18px] overflow-hidden card-surface block"
            >
                <div className="flex items-center gap-2 px-[18px] py-3.5 border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-[oklch(60%_0.02_30)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[oklch(65%_0.02_90)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[oklch(70%_0.02_150)]" />
                    <span className="font-mono text-xs text-faint ml-2.5">
                        e-citoyen.tn
                    </span>
                </div>
                <div className="h-[280px] sm:h-[400px] relative striped-placeholder">
                    <Image
                        src="/assets/Project01/e-citoyen.png"
                        alt="E-Citoyen screenshot"
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </a>
        </div>
    );
};

export default PersonalProject;
