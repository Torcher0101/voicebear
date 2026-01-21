"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { Apple, Play, Smartphone } from "lucide-react";

type Platform = "ios" | "macos" | "other";

export default function Hero() {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const [platform, setPlatform] = useState<Platform>("other");

    // Detect user platform
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
        const timer = setTimeout(() => {
            setIsPlaying(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const iosLink = "https://apps.apple.com/tw/app/voicebear/id6756269777";
    const macosLink = "https://apps.apple.com/tw/app/voicebear/id6756269777?l=en-GB";

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
                        {/* Primary download button based on platform */}
                        {platform === "ios" ? (
                            <Button
                                size="default"
                                variant="cta"
                                icon={<Smartphone size={20} />}
                                href={iosLink}
                            >
                                {t.hero.downloadiOS}
                            </Button>
                        ) : (
                            <Button
                                size="default"
                                variant="cta"
                                icon={<Apple size={20} />}
                                href={macosLink}
                            >
                                {t.hero.downloadMacOS}
                            </Button>
                        )}

                        {/* Secondary download button for other platform */}
                        {platform !== "other" && (
                            <Button
                                variant="secondary"
                                size="default"
                                icon={platform === "ios" ? <Apple size={20} /> : <Smartphone size={20} />}
                                href={platform === "ios" ? macosLink : iosLink}
                            >
                                {platform === "ios" ? t.hero.downloadMacOS : t.hero.downloadiOS}
                            </Button>
                        )}

                        {/* For desktop browsers, show both options */}
                        {platform === "other" && (
                            <>
                                <Button
                                    variant="secondary"
                                    size="default"
                                    icon={<Smartphone size={20} />}
                                    href={iosLink}
                                >
                                    {t.hero.downloadiOS}
                                </Button>
                            </>
                        )}

                        {/* Watch Demo button */}
                        <Button variant="ghost" size="default" icon={<Play size={20} />} onClick={handlePlay}>
                            {t.hero.watchVideo}
                        </Button>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.videoWrapper}>
                        {!isPlaying ? (
                            <div className={styles.thumbnailOverlay} onClick={handlePlay}>
                                <img
                                    src="https://img.youtube.com/vi/omVpl9NWA24/maxresdefault.jpg"
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
                                src="https://www.youtube.com/embed/omVpl9NWA24?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1"
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
