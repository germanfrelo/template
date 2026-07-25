/**
 * NOTE:
 * Prettier automatically parses and converts these EditorConfig properties to their corresponding Prettier options:
 * - end_of_line     -> endOfLine
 * - indent_style    -> useTabs
 * - indent_size     -> tabWidth
 * - max_line_length -> printWidth
 * Do NOT configure them here; do it in the .editorconfig file.
 * This will serve as a tool-agnostic single source of truth and will prevent conflicts between editor typing behaviour and Prettier formatting.
 * See https://prettier.io/docs/configuration#editorconfig
 *
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	quoteProps: "consistent", // Prevents mixed styles.
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
