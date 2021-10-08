const countries: Array<Country> = [
	{
		countryCode: 'uk',
		emoji: '🇬🇧',
		language: 'English',
		languageCode: 'en',
		name: 'United Kingdom',
	},
	{
		countryCode: 'es',
		emoji: '🇪🇸',
		language: 'Español',
		languageCode: 'es',
		name: 'España',
	},
];

export interface Country {
	countryCode: string;
	name: string;
	emoji: string;
	language: string;
	languageCode: string;
}

export default countries;
