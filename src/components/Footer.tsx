"use client";

import React from "react";
import styles from "./Footer.module.css";
import { useLanguage } from "../context/LanguageContext";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className="brand">
                        <div className={styles.logo}>VoiceBear</div>
                        <p className={styles.copyright}>{t.footer.rights}</p>
                    </div>

                    <div className={styles.links}>
                        <a href="https://github.com/torcher0101" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            <Github size={20} />
                        </a>
                        {/* Add more social links here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
