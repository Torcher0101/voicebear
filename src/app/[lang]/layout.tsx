import { LanguageProvider } from "@/context/LanguageContext";

// Static params for export
export function generateStaticParams() {
    return [{ lang: "en" }, { lang: "tw" }];
}

export default async function LanguageLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return (
        <LanguageProvider lang={lang}>
            {children}
        </LanguageProvider>
    );
}
