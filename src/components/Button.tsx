import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "default" | "small";
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function Button({
    variant = "primary",
    size = "default",
    children,
    icon,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ""}`}
            {...props}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
}
