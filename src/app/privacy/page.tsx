"use client";

import React from "react";
import Button from "../../components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { privacyPolicyData } from "./data";

export default function PrivacyPage() {
    const { language, setLanguage } = useLanguage();
    const content = privacyPolicyData[language] || privacyPolicyData.en;

    // Split content by newlines to render proper paragraphs
    const title = language === 'tw' ? '隱私權聲明' : 'Privacy Policy';
    const backText = language === 'tw' ? '返回首頁' : 'Back to Home';
    const switchText = language === 'tw' ? 'English' : '中文';

    const toggleLanguage = () => {
        setLanguage(language === 'tw' ? 'en' : 'tw');
    };

    return (
        <main style={{
            minHeight: "100vh",
            padding: "80px 24px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "var(--color-text-primary)"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "40px"
            }}>
                <Link href="/">
                    <Button variant="ghost" size="small" icon={<ArrowLeft size={16} />}>
                        {backText}
                    </Button>
                </Link>

                <Button variant="ghost" size="small" onClick={toggleLanguage}>
                    {switchText}
                </Button>
            </div>

            <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: "0 0 24px",
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>
                {title}
            </h1>

            <div style={{ color: "var(--color-text-secondary)", lineHeight: "1.8", whiteSpace: "pre-wrap" }}>
                {content}
            </div>
        </main>
    );
}
