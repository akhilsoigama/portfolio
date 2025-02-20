import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Darkmode/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akhil Soigama - Portfolio",
  description: "Welcome to my portfolio website. I'm a developer passionate about building amazing web experiences.",
  icons: {
    icon: "https://portfolio-akhilsoigamas-projects.vercel.app/favicon.ico", 
    apple: "https://portfolio-akhilsoigamas-projects.vercel.app/apple-touch-icon.png", 
    shortcut: "https://portfolio-akhilsoigamas-projects.vercel.app/favicon-16x16.png",
  },
  openGraph: {
    title: "Akhil Soigama - Portfolio",
    description: "Welcome to my portfolio website. I'm a developer passionate about building amazing web experiences.",
    url: "https://portfolio-akhilsoigamas-projects.vercel.app/", 
    siteName: "Akhil Soigama",
    images: [
      {
        url: "https://portfolio-akhilsoigamas-projects.vercel.app/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Akhil Soigama Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >    
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}