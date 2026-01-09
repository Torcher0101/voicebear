"use client";

import React from "react";
import Button from "../../components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import { privacyPolicyData } from "./data";

export default function PrivacyPage() {
    const { language } = useLanguage();
    const content = privacyPolicyData[language] || privacyPolicyData.en;

    // Split content by newlines to render proper paragraphs
    const title = language === 'tw' ? '隱私權聲明' : 'Privacy Policy';

    return (
        <main style={{
            background: "var(--color-bg-primary)",
            minHeight: "100vh"
        }}>
            <Navbar />

            <div style={{
                padding: "120px 24px",
                maxWidth: "800px",
                margin: "0 auto",
                color: "var(--color-text-primary)"
            }}>
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
            </div>
        </main>
    );
}
