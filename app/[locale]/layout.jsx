import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "../ThemeProviders";
import { dir } from "i18next";
const inter = Inter({ subsets: ["latin"] });
import "swiper/css";
import "swiper/css/bundle";
import i18nConfig from "../../i18nConfig";
import Header from "@/components/layout/Header";

//fonts
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-mont",
});

const open_san = Open_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-open",
});

export const metadata = {
  title: "Learn Next14",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      suppressHydrationWarning
      className={` ${open_san.variable}`}
    >
      <body className={`font-mont`}>
        <ThemeProviders>
          <Header />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
