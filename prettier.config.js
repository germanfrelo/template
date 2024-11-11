// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	// When using Astro, uncomment this to use the plugin. Ref: https://docs.astro.build/en/editor-setup/#prettier
	// plugins: ["prettier-plugin-astro"],
	quoteProps: "consistent",
	overrides: [
		{
			files: ["*.html", "*.css", "*.astro"],
			options: {
				printWidth: 9999,
			},
		},
		{
			files: ["*.js", "*.jsx", "*.vue"],
			options: {
				singleAttributePerLine: true,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

export default config;
