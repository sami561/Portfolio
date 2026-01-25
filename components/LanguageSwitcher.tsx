"use client";

import * as React from "react";
import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleValueChange = (nextProps: string) => {
        router.replace(pathname, { locale: nextProps });
    };

    return (
        <Select defaultValue={locale} onValueChange={handleValueChange}>
            <SelectTrigger className="w-[140px] md:w-[100px] border-accent/50 focus:ring-accent text-primary">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="es">Español</SelectItem>
            </SelectContent>
        </Select>
    );
}
