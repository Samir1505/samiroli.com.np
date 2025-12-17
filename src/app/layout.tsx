import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header/page";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import Aoscompo from "./utils/aos";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "./components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./component/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samir Oli Website",
  description: "Next.js + TailwindCSS Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <AuthDialogProvider>
          <SessionProviderComp>
            <ThemeProvider attribute="class" enableSystem defaultTheme="system">
              <Aoscompo>
                <Header />
                {children}
                <Footer/>
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}
