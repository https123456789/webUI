import typescript from '@rollup/plugin-typescript';
import "fs";

let exampleDirs = [
	"examples/gettingStarted",
	"examples/links",
	"examples/multiView"
]

let exampleFiles = exampleDirs.map((path) => {
	return {
		file: path + "/webui.js",
		name: "WebUI",
		format: "umd"
	}
});

export default {
	input: "src/webui.ts",
	output: [
		{
			file: "build/webui.js",
			format: "umd",
			name: "WebUI"
		}
	].concat(exampleFiles),
	plugins: [
		typescript()
	]
}