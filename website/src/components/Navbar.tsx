"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { Download } from "lucide-react";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    VoiceBear
                </div>

                <nav className={styles.links}>
                    <a href="#features" className={styles.link}>{t.nav.features}</a>
                    <a href="#how-it-works" className={styles.link}>{t.nav.howItWorks}</a>
                </nav>

                <div className={styles.actions}>
                    <button onClick={toggleLanguage} className={styles.langToggle}>
                        {language === "en" ? "中文" : "English"}
                    </button>

                    <Button size="small" icon={<Download size={16} />}>
                        {t.nav.download}
                    </Button>
                </div>
            </div>
        </header>
    );
}
