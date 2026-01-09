"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Basic detection or default to 'en'
        // For static export, we can't do server-side redirect, so client-side here.
        const userLang = navigator.language.toLowerCase().includes('zh') ? 'tw' : 'en';
        router.replace(`/${userLang}`);
    }, [router]);

    return null; // Or a loading spinner
}
