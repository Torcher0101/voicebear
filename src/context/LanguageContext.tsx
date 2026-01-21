"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Types
type Language = "en" | "tw";

interface NavTranslations {
    features: string;
    howItWorks: string;
    download: string;
}

interface HeroTranslations {
    title: string;
    subtitle: ReactNode;
    subtitleMobile: ReactNode;
    downloadMac: string;
    downloadiOS: string;
    downloadMacOS: string;
    availableOn: string;
    watchVideo: string;
    requirements: string;
    version: string;
    releaseDate: string;
}

interface HowItWorksTranslations {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
}

interface FeatureItem {
    title: string;
    description: string;
}

interface FeaturesTranslations {
    title: string;
    items: {
        voiceInput: FeatureItem;
        localProcessing: FeatureItem;
        privacy: FeatureItem;
        cloudOption: FeatureItem;
        customization: FeatureItem;
        anywhere: FeatureItem;
    };
}

interface FooterTranslations {
    rights: string;
    privacyPolicy: string;
}

interface Translations {
    nav: NavTranslations;
    hero: HeroTranslations;
    features: FeaturesTranslations;
    howItWorks: HowItWorksTranslations;
    footer: FooterTranslations;
}

interface LanguageContextType {
    language: Language;
    t: Translations;
    setLanguage: (lang: Language) => void;
}

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            features: "Features",
            howItWorks: "How it works",
            download: "Download"
        },
        hero: {
            title: "Type at the Speed of Thought",
            subtitle: <>Experience the future of voice typing with <span className="highlight-text">local AI processing</span>. Fast, private, and accurate.</>,
            subtitleMobile: <>Experience the future of voice typing on <span className="highlight-text">iPhone & Mac</span>.</>,
            downloadMac: "Download for macOS",
            downloadiOS: "Download for iPhone",
            downloadMacOS: "Download for macOS",
            availableOn: "Available on",
            watchVideo: "Watch Demo",
            requirements: "macOS 13.0+ (Apple Silicon Recommended)",
            version: "v1.0.3",
            releaseDate: "Released Jan 2026"
        },
        features: {
            title: "Why VoiceBear?",
            items: {
                voiceInput: {
                    title: "Universal Voice Input",
                    description: "Works in any application. Just press Option + Space to start dictating instantly."
                },
                localProcessing: {
                    title: "On-Device",
                    description: "Powered by Whisper.cpp. Your voice data never leaves your device by default."
                },
                privacy: {
                    title: "Privacy First",
                    description: "No data collection for core features. You have complete control over your data."
                },
                cloudOption: {
                    title: "Cloud Power",
                    description: "Optional cloud processing with Groq & Gemini for enhanced accuracy when needed."
                },
                customization: {
                    title: "Customizable",
                    description: "Configure shortcuts, models, and prompts to match your workflow."
                },
                anywhere: {
                    title: "Works Everywhere",
                    description: "Compatible with Notes, Slack, Xcode, or any text field on your Mac."
                }
            }
        },
        howItWorks: {
            step1Title: "Shortcut",
            step1Desc: "Press Option + Space to activate VoiceBear instantly.",
            step2Title: "Speak",
            step2Desc: "Speak naturally. Your voice is captured and processed locally.",
            step3Title: "Transcribe",
            step3Desc: "Text appears in your active application in real-time.",
        },
        footer: {
            rights: "© 2026 VoiceBear. All rights reserved.",
            privacyPolicy: "Privacy Policy"
        }
    },
    tw: {
        nav: {
            features: "功能特色",
            howItWorks: "如何使用",
            download: "下載試用版"
        },
        hero: {
            title: "用聲音速度\n捕捉你的思緒",
            subtitle: <>體驗未來的語音輸入方式。<br /><span className="highlight-text">本地 AI 運算</span>，快速、私密且精準。</>,
            subtitleMobile: <>在 <span className="highlight-text">iPhone 與 Mac</span> 上<br />體驗極速語音輸入。</>,
            downloadMac: "下載 macOS 版本",
            downloadiOS: "下載 iPhone 版本",
            downloadMacOS: "下載 macOS 版本",
            availableOn: "現已登陸",
            watchVideo: "觀看演示",
            requirements: "macOS 13.0+ (建議使用 Apple Silicon)",
            version: "v1.0.3",
            releaseDate: "2026 年 1 月發布"
        },
        features: {
            title: "為什麼選擇 VoiceBear？",
            items: {
                voiceInput: {
                    title: "通用語音輸入",
                    description: "適用於任何應用程式。只需按下 Option + Space 即可立即開始聽寫。"
                },
                localProcessing: {
                    title: "本地運算",
                    description: "由 Whisper.cpp 驅動。預設情況下，您的語音資料絕不會離開您的裝置。"
                },
                privacy: {
                    title: "隱私優先",
                    description: "核心功能不收集任何資料。您完全掌控自己的數據。"
                },
                cloudOption: {
                    title: "雲端輔助",
                    description: "可選的 Groq 與 Gemini 雲端處理，在需要時提供更強大的準確度。"
                },
                customization: {
                    title: "高度自訂",
                    description: "配置快捷鍵、模型和提示詞，打造最適合您的工作流程。"
                },
                anywhere: {
                    title: "隨處可用",
                    description: "相容於 Notes、Slack、Xcode 或 Mac 上的任何文字輸入框。"
                }
            }
        },
        howItWorks: {
            step1Title: "快捷啟動",
            step1Desc: "按下 Option + Space 瞬間喚醒 VoiceBear。",
            step2Title: "自然說話",
            step2Desc: "自然地說出想法。您的語音將在本地即時捕捉並處理。",
            step3Title: "即時轉錄",
            step3Desc: "文字將即時輸入到您當前使用的應用程式中。",
        },
        footer: {
            rights: "© 2026 VoiceBear. 版權所有。",
            privacyPolicy: "隱私權聲明"
        }
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
    children,
    lang = "en"
}: {
    children: ReactNode;
    lang?: string;
}) {
    const currentLang = (["en", "tw"].includes(lang) ? lang : "en") as Language;

    const setLanguage = (newLang: Language) => {
        // Client-side redirection for static export compatibility
        if (typeof window === "undefined") return;

        const currentPath = window.location.pathname;
        // Replace /en/ or /tw/ with new lang
        let newPath = currentPath.replace(`/${currentLang}`, `/${newLang}`);

        // Fallback if path doesn't contain lang (e.g. root) but that shouldn't happen with [lang] routing
        // but strictly replacing exact segment is safer.
        // Assuming path starts with /en /tw...
        if (!newPath.includes(`/${newLang}`)) {
            // Rough fallback
            newPath = `/${newLang}${currentPath.replace(/^\/(en|tw)/, '')}`;
        }

        window.location.href = newPath;
    };

    return (
        <LanguageContext.Provider value={{ language: currentLang, t: translations[currentLang], setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
