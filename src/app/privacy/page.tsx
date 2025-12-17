"use client";

import React from "react";
import Button from "../../components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { privacyPolicyData } from "./data";

export default function PrivacyPage() {
    const { language, t } = useLanguage();
    const content = privacyPolicyData[language] || privacyPolicyData.en;

    // Split content by newlines to render proper paragraphs
    const title = language === 'tw' ? '隱私權聲明' : 'Privacy Policy';
    const backText = language === 'tw' ? '返回首頁' : 'Back to Home';

    return (
        <main style={{
            minHeight: "100vh",
            padding: "120px 24px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "var(--color-text-primary)"
        }}>
            <Link href="/">
                <Button variant="ghost" size="small" icon={<ArrowLeft size={16} />}>
                    {backText}
                </Button>
            </Link>

            <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: "40px 0 24px",
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
