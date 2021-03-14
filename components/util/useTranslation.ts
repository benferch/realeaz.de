import { Strings } from ':components/data/data';
import { defaultLocale, languageContext } from ':components/LanguageProvider';
import { useContext } from 'react';

export default function useTranslation() {
	const [locale] = useContext(languageContext);

	function t(key: string) {
		if (!Strings[locale][key]) {
			console.warn(`No string '${key}' for locale '${locale}'`);
		}
		return Strings[locale][key] || Strings[defaultLocale][key] || '';
	}

	return { t, locale };
}
