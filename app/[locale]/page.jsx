import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import TranslationsProvider from "@/components/TranslationsProvider";
import AnimationDiv from "@/components/test/AnimationDiv";
import ThemeSwitcher from "@/components/ui/button/ThemeSwitcher";
import Link from "next/link";
import initTranslations from "../i18n";
import { Button } from "@nextui-org/react";
import Slice from "@/components/layout/Slice";
const i18nNamespaces = ["home"];
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      {/* <main className="flex min-h-screen  flex-col items-center justify-between p-24"> */}
      <Slice />
      <div className="h-[500px] w-full bg-red-50"></div>
      {/* <ThemeSwitcher /> */}
      {/* <h1>{t("header")}</h1> */}
      {/* <AnimationDiv />
        <ExampleClientComponent />
        <LanguageChanger />
        <Link href="/sample">Sample</Link>
        <Button>Button</Button> */}
      {/* </main> */}
    </TranslationsProvider>
  );
}
