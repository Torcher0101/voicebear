"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "tw";

type Translations = {
    nav: {
        features: string;
        howItWorks: string;
        download: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    features: {
        privacyTitle: string;
        privacyDesc: string;
        speedTitle: string;
        speedDesc: string;
        offlineTitle: string;
        offlineDesc: string;
        windowTitle: string;
        windowDesc: string;
    };
    howItWorks: {
        step1Title: string;
        step1Desc: string;
        step2Title: string;
        step2Desc: string;
        step3Title: string;
        step3Desc: string;
    };
    footer: {
        rights: string;
        privacyPolicy: string;
    };
};

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            features: "Features",
            howItWorks: "How it Works",
            download: "Download Beta",
        },
        hero: {
            title: "Type at the Speed of Thought",
            subtitle: "The fastest AI transcription tool for macOS & iPhone. Privacy-first, completely offline.",
            ctaPrimary: "Download for macOS",
            ctaSecondary: "Watch Demo",
        },
        features: {
            privacyTitle: "100% Privacy",
            privacyDesc: "Everything runs locally on your device. Your voice data never leaves your Mac or iPhone.",
            speedTitle: "Instant Speed",
            speedDesc: "Powered by Apple Silicon ANE acceleration for lightning-fast transcription.",
            offlineTitle: "Offline Capable",
            offlineDesc: "No internet required. Use it on a plane, in a secure room, anywhere.",
            windowTitle: "Hide & Seek",
            windowDesc: "Runs in the background. Press a shortcut to summon, click away to hide.",
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
            rights: "© 2025 VoiceBear. All rights reserved.",
            privacyPolicy: "Privacy Policy",
        },
    },
    tw: {
        nav: {
            features: "功能特色",
            howItWorks: "如何使用",
            download: "下載試用版",
        },
        hero: {
            title: "說話即寫作，唯快不破",
            subtitle: "專為 macOS 與 iPhone 打造的極速 AI 轉錄工具。隱私優先，全離線支援。",
            ctaPrimary: "下載 macOS 版本",
            ctaSecondary: "觀看演示",
        },
        features: {
            privacyTitle: "絕對隱私",
            privacyDesc: "所有運算皆在本地完成。您的語音數據永遠不會離開您的 Mac 或 iPhone。",
            speedTitle: "極致速度",
            speedDesc: "基於 Apple Silicon ANE 加速，實現閃電般的轉錄體驗。",
            offlineTitle: "全離線支援",
            offlineDesc: "無需網路連接。無論是在飛機上還是機密會議室，隨時隨地可用。",
            windowTitle: "隱形助手",
            windowDesc: "在背景靜默運行。快捷鍵喚出，點擊即隱藏。",
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
            rights: "© 2025 VoiceBear. 版權所有。",
            privacyPolicy: "隱私權聲明",
        },
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("tw"); // Default to TW as requested? Or EN? Let's default to TW based on user location context.

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
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
