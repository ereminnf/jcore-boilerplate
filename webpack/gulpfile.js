const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const path = require('path');
const utils = require('./root').utils;

const configSvg = {
    shape: {
        spacing: {
            padding: 2
        }
    },
    mode: {
        view: {
            bust: true,
            render: {
                css: true
            }
        },
    }
};

gulp.task('sprite:social', async function () {
    gulp.src(path.join(utils.paths.root, '/public/assets/icons/social/*.svg'))
        .pipe(svgSprite(configSvg))
        .pipe(gulp.dest(path.join(utils.paths.sprite, 'social')));
});

const build = gulp.series([
    'sprite:social'
]);

gulp.task('sprite', build);