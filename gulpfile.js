// Initialize modules
const { watch, series } = require('gulp');
const browsersync = require('browser-sync').create();

// Browsersync
function browserSyncServe(cb) {
	browsersync.init({
		server: {
			baseDir: './',
		},
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
			},
		},
	});
	cb();
}

function browserSyncReload(cb) {
	browsersync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch(['index.html', 'style.css', 'script.js'], browserSyncReload);
}

// Default Gulp Task
exports.default = series(browserSyncServe, watchTask);
