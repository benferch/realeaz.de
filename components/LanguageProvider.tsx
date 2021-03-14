import React, { createContext, useEffect, useState } from 'react';

export const defaultLocale = 'en';
export const locales = ['en', 'de'];
export const languageContext = createContext([]);

export default function LanguageProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	let lang;
	if (process.browser) {
		if (!localStorage.getItem('lang')) {
			localStorage.setItem(
				'lang',
				navigator.language === 'en-US'
					? 'en'
					: navigator.language === 'de-DE'
					? 'de'
					: 'en'
			);
		}
		if (localStorage.getItem('lang')) {
			lang = localStorage.getItem('lang');
		}
	}
	const [locale, setLocale] = useState(lang ? lang : 'en');
	return (
		<languageContext.Provider value={[locale, setLocale]}>
			{children}
		</languageContext.Provider>
	);
}
