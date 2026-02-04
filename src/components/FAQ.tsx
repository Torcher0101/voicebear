"use client";

import React from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
    const faqs = [
        {
            q: "How do I reopen the main window after closing it?",
            a: "VoiceBear runs in the background. You can reopen the main window anytime by clicking the microphone icon in your menu bar (top right of screen) and selecting 'Show Main Window', or by clicking the Dock icon."
        },
        {
            q: "Does VoiceBear work offline?",
            a: "Yes! VoiceBear features an on-device AI model that works completely offline for privacy and speed. You can also switch to cloud models for higher accuracy if needed."
        },
        {
            q: "How do I upgrade to Pro?",
            a: "You can upgrade to VoiceBear Pro directly within the app. Go to Settings > Plan to view options."
        },
        {
            q: "Is my voice data private?",
            a: "Absolutely. With on-device processing, your audio never leaves your Mac. If you use cloud mode, data is processed securely and not stored."
        }
    ];

    return (
        <section id="faq" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                </div>
                <div className={styles.grid}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.question}>{faq.q}</h3>
                            <p className={styles.answer}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
