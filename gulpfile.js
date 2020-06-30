const requireDir = require('require-dir');

const tasks = requireDir('./scripts/tasks');
const gulp = require('gulp');

const copy = tasks.copy.copy;

const defaultTask = gulp.series(copy);

exports.default = defaultTask;
