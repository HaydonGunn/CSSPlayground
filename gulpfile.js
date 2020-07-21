const fs = require('fs');
const path = require('path');

const gulp = require('gulp');

// Styles compilation requirements
const cache = require('gulp-cached');
const progeny = require('gulp-progeny');
const filter = require('gulp-filter');
const less = require('gulp-less');
const notify = require('gulp-notify');
const remember = require('gulp-remember');
const clone = require('gulp-clone');
const postcss = require('gulp-postcss');
const concatCss = require('gulp-concat-css');
const merge = require('merge-stream');
const autoprefixer = require('autoprefixer');
const clean = require('postcss-clean');
const sortMq = require('postcss-sort-media-queries');

const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');

const browserSync = require('browser-sync');
const ssi = require('browsersync-ssi');

const webpackConfig = require(`./config/webpack.config.${process.env.NODE_ENV || 'dev'}.js`);
const paths = require('./config/paths');

function styles() {

	var base = gulp.src(paths.styles.src)
		.pipe(cache('less'))
		.pipe(progeny({
			regexp: /^\s*@import\s*(?:\(\w+\)\s*)?['"]([^'"]+)['"]/
		}))
		.pipe(filter(['**/*.less', '!**/_*.less']))
		.pipe(less({
			javascriptEnabled: true
		})).on('error', notify.onError(function(err) {
			return `Error compiling less: ${err.message}`;
		}));

	return base
		.pipe(postcss([
			autoprefixer(),
			clean(),
			sortMq()
		]))
		.pipe(gulp.dest(paths.styles.dest));
}

function watchStyles(done) {
	gulp.watch(paths.styles.src, styles);

	done();
}

function scripts() {
	return gulp.src(paths.scripts.src)
		.pipe(gulpWebpack(webpackConfig, webpack, (err, stats) => {
			// Output stats file on production bundles only
			if (process.env.NODE_ENV === 'production') {
				fs.writeFile(path.resolve(__dirname, paths.scripts.dest, 'stats.json'), JSON.stringify(stats.toJson()), (err) => {
					if (err) throw err;
				});
			}
		}))
		.pipe(gulp.dest(paths.scripts.dest));
}

function watchScripts(done) {
	gulp.watch(paths.scripts.src, scripts);

	done();
}

function watchHtml(done) {
	gulp.watch(paths.html.src, serverReload);

	done();
}

function server(done) {
	browserSync.init({
		port: 2650,
		server: {
			baseDir: paths.root.flatbuild,
		},
		middleware: ssi({
			baseDir: paths.root.flatbuild,
			ext: '.html'
		}),
		notify: false,
		open: false,
		ghostMode: false
	});

	done();
}

function serverReload(done) {
	browserSync.reload();

	done();
}

function staticAssets() {
	return gulp.src(paths.staticAssets.src)
		.pipe(gulp.dest(paths.staticAssets.dest));
}

function watchStaticAssets(done) {
	gulp.watch(paths.staticAssets.src, staticAssets);

	done();
}

exports.build = gulp.parallel(
	styles,
	// gulp.series(styles, cssSplitCritical, cssSplitRest),
	scripts,
	staticAssets
);

exports.watch = gulp.series(
	exports.build,
	watchStyles,
	watchScripts,
	watchStaticAssets
);

exports.serve = gulp.series(
	exports.build,
	server,
	watchHtml,
	exports.watch
);
