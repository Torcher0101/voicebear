"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [result, setResult] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // 🔥 REPLACE WITH YOUR ACCESS KEY FROM web3forms.com
        formData.append("access_key", "718405e7-49c4-4efa-8afe-16c72dd84870");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult(t.contact.sent);
                form.reset();
            } else {
                console.error("Error", data);
                setStatus("error");
                setResult(data.message || t.contact.error);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setResult(t.contact.error);
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.contact.title}</h2>
                    <p className={styles.subtitle}>{t.contact.subtitle}</p>
                </div>

                <div className={styles.formWrapper}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type="hidden" name="subject" value="VoiceBear Support Request" />
                        <input type="hidden" name="from_name" value="VoiceBear Website" />
                        {/* Honeypot to prevent spam */}
                        <input type="checkbox" name="botcheck" className={styles.hidden} style={{ display: "none" }} />

                        <div className={styles.group}>
                            <label htmlFor="name" className={styles.label}>{t.contact.name}</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder={t.contact.namePlaceholder} />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email" className={styles.label}>{t.contact.email}</label>
                            <input type="email" id="email" name="email" required className={styles.input} placeholder={t.contact.emailPlaceholder} />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="type" className={styles.label}>{t.contact.type}</label>
                            <select id="type" name="type" className={styles.select}>
                                <option value="support">{t.contact.typeSupport}</option>
                                <option value="bug">{t.contact.typeBug}</option>
                                <option value="feature">{t.contact.typeFeature}</option>
                                <option value="other">{t.contact.typeOther}</option>
                            </select>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message" className={styles.label}>{t.contact.message}</label>
                            <textarea id="message" name="message" required className={styles.textarea} rows={5} placeholder={t.contact.messagePlaceholder}></textarea>
                        </div>

                        <button type="submit" disabled={status === "sending" || status === "success"} className={styles.button}>
                            {status === "sending" ? (
                                <>
                                    <Loader2 className={styles.spin} size={20} /> {t.contact.sending}
                                </>
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle size={20} /> {t.contact.sent}
                                </>
                            ) : (
                                <>
                                    <Send size={20} /> {t.contact.send}
                                </>
                            )}
                        </button>

                        {status === "error" && (
                            <div className={styles.error}>
                                <AlertCircle size={16} /> {result}
                            </div>
                        )}
                        {status === "success" && (
                            <div className={styles.success}>
                                <CheckCircle size={16} /> {t.contact.success}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
