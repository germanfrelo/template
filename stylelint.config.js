/** @type {import('stylelint').Config} */
export default {
	extends: [
		// Order matters: later configs take precedence over (override) earlier ones.
		"stylelint-config-standard",
		"stylelint-config-recess-order",
	],
	plugins: ["stylelint-plugin-defensive-css"],
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	reportUnscopedDisables: true,
	rules: {
		/* Avoid errors
		---------------------------------------- */
		// Descending
		"no-descending-specificity": [true, { severity: "warning" }],
		// Duplicate
		"font-family-no-duplicate-names": [
			true,
			{
				ignoreFontFamilyNames: ["monospace"], // See https://github.com/search?q=repo%3Agermanfrelo%2Fbase-css-stylesheet+%22monospace%2C+monospace%22&type=code
			},
		],
		// Unknown
		"no-unknown-animations": true,
		"no-unknown-custom-media": true,
		"no-unknown-custom-properties": true,

		/* Enforce conventions
		---------------------------------------- */
		// Empty lines
		"declaration-empty-line-before": "never",
		// Notation
		"media-feature-range-notation": null, // TODO: Remove when browser support is ~96% (https://caniuse.com/css-media-range-syntax)
		// Pattern
		"custom-media-pattern": null,
		"custom-property-pattern": null,
		"keyframes-name-pattern": null,
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		// Redundant
		"declaration-block-no-redundant-longhand-properties": null,

		/* Plugin: use-defensive-css
		---------------------------------------- */
		"plugin/use-defensive-css": [
			true,
			{
				"severity": "warning",
				"accidental-hover": false, // Enable as needed
				"background-repeat": false, // My CSS reset already apply 'no-repeat' to all elements
				"custom-property-fallbacks": true,
				"flex-wrapping": true,
				"scroll-chaining": true,
				"scrollbar-gutter": false, // Enable as needed
				"vendor-prefix-grouping": true,
			},
		],
	},
};
