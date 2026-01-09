"use client";

import React from "react";
import styles from "./Features.module.css";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, Zap, Mic, Globe, Settings, Keyboard } from "lucide-react";

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Mic size={28} />,
            title: t.features.items.voiceInput.title,
            desc: t.features.items.voiceInput.description,
        },
        {
            icon: <Zap size={28} />,
            title: t.features.items.localProcessing.title,
            desc: t.features.items.localProcessing.description,
        },
        {
            icon: <ShieldCheck size={28} />,
            title: t.features.items.privacy.title,
            desc: t.features.items.privacy.description,
        },
        {
            icon: <Globe size={28} />,
            title: t.features.items.cloudOption.title,
            desc: t.features.items.cloudOption.description,
        },
        {
            icon: <Settings size={28} />,
            title: t.features.items.customization.title,
            desc: t.features.items.customization.description,
        },
        {
            icon: <Keyboard size={28} />,
            title: t.features.items.anywhere.title,
            desc: t.features.items.anywhere.description,
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
