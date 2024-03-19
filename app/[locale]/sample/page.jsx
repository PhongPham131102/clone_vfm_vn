import initTranslations from "@/app/i18n";
import React from "react";
const i18nNamespaces = ["home"];
const SamplePage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <div>
      <h1>{t("greeting")}</h1>
    </div>
  );
};

export default SamplePage;
