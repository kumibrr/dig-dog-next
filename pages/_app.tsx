import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import { createTheme, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
	const darkMode = createTheme({ palette: { mode: 'dark' } });

	return (
		<NextIntlProvider messages={pageProps.messages}>
			<ThemeProvider theme={darkMode}>
				<Component {...pageProps} />
			</ThemeProvider>
		</NextIntlProvider>
	);
}
export default MyApp;
