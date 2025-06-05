# Localization with i18Next

## Installation

```
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

- **i18next**: The core i18n library.
- **react-i18next**: React bindings for i18next.
- **i18next-http-backend**: (Optional) Used to load translations from external JSON files.
- **i18next-browser-languagedetector**: (Optional) Automatically detects the user's browser language.

## /src/i18Next.ts

```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations from external files
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Connect with React
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "si"], // Define available languages
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // Save selected language
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;
```

## public/locales/en/translation.json

```
{
  "Welcome to CFC": "Welcome to CFC"
}
```

## public/locales/si/translation.json

```
{
  "Welcome to CFC": "CFC වෙත සාදරයෙන් පිළිගනිමු"
}
```

## App update

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Import i18n configuration

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## useTranslation

```
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

    </div>
  );
};

export default Home;
```

## LanguageSwitcher

```
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="px-4 py-2 border rounded"
    >
      <option value="en">English</option>
      <option value="si">සිංහල</option>
    </select>
  );
};

export default LanguageSwitcher;
```
