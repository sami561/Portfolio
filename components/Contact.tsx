"use client";

import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { sendMail } from "@/lib/mail";
import { useTranslations } from "next-intl";

const inputClasses =
    "font-mono text-sm bg-background border border-input-border rounded-[10px] p-4 text-foreground w-full outline-none focus:border-accent transition-colors";

const Contact = () => {
    const t = useTranslations("Contact");
    const { register, handleSubmit } = useForm();

    const info = [
        {
            icon: <FaPhoneAlt size={18} />,
            text: "+216 28 699 806",
            title: t("info.phone"),
        },
        {
            icon: <FaEnvelope size={18} />,
            text: "sami.ayachi.dev@gmail.com",
            title: t("info.email"),
        },
        {
            icon: <FaMapMarkerAlt size={18} />,
            text: "Tunisia, Sousse",
            title: t("info.address"),
        },
    ];

    const sendMailer = async (data: any) => {
        await sendMail({
            to: data.Email,
            name: `${data.firstName} ${data.Lastname}`,
            subject: "Contact",
            body: data.message,
        });
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8 min-w-0">
            {/* Form card */}
            <div className="min-w-0 card-surface rounded-[20px] p-8 xl:p-12">
                <h2 className="text-[28px] xl:text-4xl font-bold text-accent mb-4">
                    {t("title")}
                </h2>
                <p className="text-base leading-[1.6] text-muted mb-8 max-w-[520px]">
                    {t("description")}
                </p>
                <form onSubmit={handleSubmit(sendMailer)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            className={inputClasses}
                            placeholder={t("placeholders.firstName")}
                            {...register("firstName")}
                        />
                        <input
                            className={inputClasses}
                            placeholder={t("placeholders.lastName")}
                            {...register("Lastname")}
                        />
                        <input
                            type="email"
                            className={inputClasses}
                            placeholder={t("placeholders.email")}
                            {...register("Email")}
                        />
                        <input
                            className={inputClasses}
                            placeholder={t("placeholders.phone")}
                            {...register("Phone")}
                        />
                    </div>
                    <textarea
                        className={`${inputClasses} h-[130px] resize-none mb-5`}
                        placeholder={t("placeholders.message")}
                        {...register("message")}
                    />
                    <button
                        type="submit"
                        className="w-full font-mono font-semibold text-[15px] bg-accent text-accent-foreground py-[18px] rounded-full hover:bg-accent-hover transition-colors"
                    >
                        {t("button")}
                    </button>
                </form>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4 min-w-0">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="card-surface rounded-2xl p-[26px] flex items-center gap-[18px] min-w-0"
                    >
                        <div className="w-[46px] h-[46px] rounded-xl bg-accent-soft flex items-center justify-center shrink-0 text-accent">
                            {item.icon}
                        </div>
                        <div className="min-w-0">
                            <div className="font-mono text-[13px] text-muted mb-1">
                                {item.title}
                            </div>
                            <div className="text-base font-semibold break-words">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
