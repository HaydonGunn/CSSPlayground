const FLATBUILD_PATH = './build';

module.exports = {
	root: {
		flatbuild: FLATBUILD_PATH
	},
	html: {
		src: `${FLATBUILD_PATH}/**/*.html`
	},
	styles: {
		src: `${FLATBUILD_PATH}/assets/src/styles/**/*.less`,
		dest: `${FLATBUILD_PATH}/assets/dist/styles`
	},
	scripts: {
		src: [`${FLATBUILD_PATH}/assets/src/scripts/**/*.js`, `${FLATBUILD_PATH}/assets/src/scripts/**/*.vue`],
		dest: `${FLATBUILD_PATH}/assets/dist/scripts`
	},
	staticAssets: {
		src: [
			`${FLATBUILD_PATH}/assets/src/*images/**/*`,
			`${FLATBUILD_PATH}/assets/src/*svg/**/*`
		],
		dest: `${FLATBUILD_PATH}/assets/dist`
	}
};