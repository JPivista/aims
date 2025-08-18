import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AIMS - Comprehensive Platform",
  description: "Our comprehensive platform designed to deliver exceptional user experiences",
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-montserrat antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;