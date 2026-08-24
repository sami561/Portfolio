import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jetbrainsMono",
});

const SpaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
    title: "Sami Ayachi — Portfolio",
    description:
        "Software Engineer and Full Stack JavaScript Developer based in Sousse, Tunisia.",
};

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
            <body className={`${JetBrainsMono.variable} ${SpaceGrotesk.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                    <ChatWidget />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
