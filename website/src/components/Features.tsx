"use client";

import React from "react";
import styles from "./Features.module.css";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, Zap, WifiOff, AppWindow } from "lucide-react";

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <ShieldCheck size={28} />,
            title: t.features.privacyTitle,
            desc: t.features.privacyDesc,
        },
        {
            icon: <Zap size={28} />,
            title: t.features.speedTitle,
            desc: t.features.speedDesc,
        },
        {
            icon: <WifiOff size={28} />,
            title: t.features.offlineTitle,
            desc: t.features.offlineDesc,
        },
        {
            icon: <AppWindow size={28} />,
            title: t.features.windowTitle,
            desc: t.features.windowDesc,
        },
    ];

    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.desc}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
