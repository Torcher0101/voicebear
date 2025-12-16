/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Required for GitHub Pages
    images: {
        unoptimized: true, // Required for static export
    },
    basePath: process.env.BASE_PATH || "",
};

export default nextConfig;
