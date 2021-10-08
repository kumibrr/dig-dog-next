import { Autocomplete, Box, TextField } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent, useState } from 'react';
import countries, { Country } from '../enums/countries';

const LanguageSelector = () => {
	const t = useTranslations('languageSelect');
	const { locale } = useRouter();
	const router = useRouter();

	const [languageCode, setLanguageCode] = useState(
		() => countries.filter((country) => country.languageCode === locale)[0]
	);

	const onSelect = (value: Country) => {
		setLanguageCode(value);
		router.push(router.route, router.route, { locale: value.languageCode });
	};

	return (
		<Autocomplete
			id='language-selection'
			sx={{ width: 200 }}
			options={countries}
			getOptionLabel={(option) => `${option.emoji} ${option.language}`}
			onChange={(e, value) => onSelect(value)}
			disableClearable={true}
			value={languageCode}
			renderOption={(props, option) => (
				<Box component='li' value={option.languageCode} {...props}>
					{option.emoji} {option.language}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					label={t('selectLanguage')}
					inputProps={params.inputProps}
				></TextField>
			)}
		></Autocomplete>
	);
};

export default LanguageSelector;
