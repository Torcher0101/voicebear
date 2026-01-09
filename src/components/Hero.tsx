"use client";

import React, { useState } from "react";
import styles from "./Hero.module.css";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { Apple, Play, Volume2 } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsPlaying(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
    };

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
                            {t.hero.downloadMac}
                        </Button>
                        {/* Scroll to video or trigger play */}
                        <Button variant="secondary" size="default" icon={<Play size={20} />} onClick={handlePlay}>
                            {t.hero.watchVideo}
                        </Button>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.videoWrapper}>
                        {!isPlaying ? (
                            <div className={styles.thumbnailOverlay} onClick={handlePlay}>
                                <img
                                    src="https://img.youtube.com/vi/K2FzUCbyyi4/maxresdefault.jpg"
                                    alt="Demo Video"
                                    className={styles.thumbnail}
                                />
                                <div className={styles.playButtonWrapper}>
                                    <div className={styles.playButtonPulse} />
                                    <button className={styles.playButton}>
                                        <Play size={32} fill="currentColor" className={styles.playIcon} />
                                    </button>
                                    <div className={styles.playText}>Watch Demo</div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src="https://www.youtube.com/embed/K2FzUCbyyi4?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1"
                                title="VoiceBear Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
