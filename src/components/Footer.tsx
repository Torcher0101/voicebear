"use client";

import React from "react";
import styles from "./Footer.module.css";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className="brand">
                        <div className={styles.logo}>VoiceBear</div>
                        <p className={styles.copyright}>
                            {t.footer.rights}
                            <span className={styles.divider}>•</span>
                            <Link href={`/${language}/privacy`} className={styles.privacyLink}>{t.footer.privacyPolicy}</Link>
                        </p>
                    </div>

                    {/* Social links removed for privacy */}
                </div>
            </div>
        </footer>
    );
}
