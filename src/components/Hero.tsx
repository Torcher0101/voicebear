"use client";

import React from "react";
import styles from "./Hero.module.css";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { Apple, Play } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.bgGlow} />

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.badge}>
                        ✨ Public Beta Available
                    </div>

                    <h1 className={styles.title}>
                        <span className="gradient-text">{t.hero.title}</span>
                    </h1>

                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>

                    <div className={styles.actions}>
                        <Button size="default" icon={<Apple size={20} />}>
                            {t.hero.ctaPrimary}
                        </Button>
                        <Button variant="secondary" size="default" icon={<Play size={20} />}>
                            {t.hero.ctaSecondary}
                        </Button>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/K2FzUCbyyi4?autoplay=1&mute=1&playlist=K2FzUCbyyi4&loop=1&controls=0&showinfo=0&rel=0"
                            title="VoiceBear Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
