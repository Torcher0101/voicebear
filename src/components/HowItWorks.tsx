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
                        <h3 className={styles.stepTitle}>{t.howItWorks.step1Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step1Desc}</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3 className={styles.stepTitle}>{t.howItWorks.step2Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step2Desc}</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3 className={styles.stepTitle}>{t.howItWorks.step3Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
