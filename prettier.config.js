/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	// Prevents mixed styles.
	quoteProps: "consistent",
	overrides: [
		{
			// Avoids arbitrary line-length-based wrapping for CSS declarations and HTML attributes.
			files: ["*.css", "*.html"],
			options: {
				printWidth: 9999,
			},
		},
		{
			// Improves readability and produces cleaner diffs.
			files: ["*.js", "*.jsx", "*.vue"],
			options: {
				singleAttributePerLine: true,
			},
		},
		{
			// Workaround for trailing commas breaking some JSONC parsers — see https://github.com/prettier/prettier/issues/15956
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
	],
};

export default config;
