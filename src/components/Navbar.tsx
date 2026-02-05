"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Button from "./Button";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Download, Apple, Smartphone } from "lucide-react";

type Platform = "ios" | "macos" | "other";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [platform, setPlatform] = useState<Platform>("other");

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (/(iphone|ipod|ipad)/i.test(userAgent)) {
            setPlatform("ios");
        } else if (/mac/i.test(userAgent)) {
            setPlatform("macos");
        } else {
            setPlatform("other");
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tw" : "en");
    };

    const iosLink = "https://apps.apple.com/tw/app/voicebear/id6756269777";
    const macosLink = "https://apps.apple.com/tw/app/voicebear/id6756269777?l=en-GB";
    const downloadLink = platform === "ios" ? iosLink : macosLink;
    const downloadIcon = platform === "ios" ? <Smartphone size={16} /> : <Apple size={16} />;

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <Link href={`/${language}`} className={styles.logo}>
                    VoiceBear
                </Link>

                <nav className={styles.links}>
                    <Link href={`/${language}#features`} className={styles.link}>{t.nav.features}</Link>
                    <Link href={`/${language}#how-it-works`} className={styles.link}>{t.nav.howItWorks}</Link>
                    <Link href={`/${language}/support`} className={styles.link}>{t.nav.support}</Link>
                    <Link href={`/${language}/privacy`} className={styles.link}>{t.nav.privacy}</Link>
                </nav>

                <div className={styles.actions}>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        {language === "en" ? "中文" : "English"}
                    </button>

                    <Button size="small" icon={downloadIcon} href={downloadLink}>
                        {t.nav.download}
                    </Button>
                </div>
            </div>
        </header>
    );
}
