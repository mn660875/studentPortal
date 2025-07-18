import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/provider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ToastContainer 
      position="top-center"
      autoClose={2000}/>
        <Providers>
        {children}
        </Providers>
        
      </body>
    </html>
  );
}
