import js from "@eslint/js";
import globals from "globals";

export default [
	{
		languageOptions: {
			globals: globals.browser, // Enables predefined set of browser global variables.
		},
	},
	js.configs.recommended, // Enables ESLint's recommended set of rules.
	{
		// ESLint ignores `**/node_modules/` and `.git/` by default. More info: https://eslint.org/docs/latest/use/configure/ignore
		ignores: ["*.min.*"], // Ignores minified files.
	},
];
