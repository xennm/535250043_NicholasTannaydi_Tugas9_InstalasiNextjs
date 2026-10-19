
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kopi Nusantara Next",
    description: "Website Kopi.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
