import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/customComponets/Footer/page";
import Navbar from "@/customComponets/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Finsensor Limited",
    description: "Finsensor AI Private Limited",
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
