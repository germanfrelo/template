import js from "@eslint/js";
import globals from "globals";

export default [
	{
		languageOptions: {
			globals: {
				// Enable all predefined browser global variables
				...globals.browser,
			},
		},
	},
	// ESLint's predefined configuration that enables its recommended rules
	js.configs.recommended,
];
