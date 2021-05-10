import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
	}

	a {
		text-decoration: none;
		color: #ffffff;
	}

	* {
		box-sizing: border-box;
	}
`;