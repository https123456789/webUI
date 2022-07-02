import typescript from '@rollup/plugin-typescript';

export default {
	input: "src/webui.ts",
	output: [
		{
			file: "build/webui.js",
			format: "umd",
			name: "WebUI"
		},
		{
			file: "tests/webui.js",
			format: "umd",
			name: "WebUI"
		}
	],
	plugins: [
		typescript()
	]
}