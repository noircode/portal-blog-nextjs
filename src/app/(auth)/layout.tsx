import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "SignIn",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
