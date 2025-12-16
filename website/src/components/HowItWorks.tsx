"use client";

import React from "react";
import styles from "./HowItWorks.module.css";
import { useLanguage } from "../context/LanguageContext";

export default function HowItWorks() {
    const { t } = useLanguage();

    return (
        <section id="how-it-works" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>{t.nav.howItWorks}</h2>

                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3 className={styles.stepTitle}>Shortcut</h3>
                        <p className={styles.stepDesc}>Press Option + Space to activate VoiceBear instantly.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.stepTitle}>Speak</h3>
                        <p className={styles.stepDesc}>Speak naturally. Your voice is captured and processed locally.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.stepTitle}>Transcribe</h3>
                        <p className={styles.stepDesc}>Text appears in your active application in real-time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
