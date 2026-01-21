import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "cta";
    size?: "default" | "small";
    children: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    target?: string;
}

export default function Button({
    variant = "primary",
    size = "default",
    children,
    icon,
    className,
    href,
    target = "_blank",
    ...props
}: ButtonProps) {
    const combinedClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ""}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={combinedClassName}
            >
                {icon && <span className={styles.icon}>{icon}</span>}
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
}

