import { Inter } from "next/font/google";
import "./globals.css";
import TranstitionProvider from "@/components/TranstitionProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JO Dev Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
       <ThemeProvider>
       <TranstitionProvider>{children}</TranstitionProvider>
       </ThemeProvider>
       </body>
    </html>
  );
}
