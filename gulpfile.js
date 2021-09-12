const gulp           = require('gulp');
const browserSync    = require('browser-sync').create();
const fileinclude    = require('gulp-file-include');
const sass           = require ('gulp-sass') (require ('sass'));
const cleanCSS       = require('gulp-clean-css');
// const gcmq           = require('gulp-group-css-media-queries');
const autoprefixer   = require('gulp-autoprefixer');
const rename         = require("gulp-rename");
const htmlmin        = require('gulp-htmlmin');
const imagemin       = require('gulp-imagemin');
const imgCompress    = require('imagemin-jpeg-recompress');
const pngquant       = require('imagemin-pngquant');
const del            = require('del');
const webp           = require('gulp-webp');
const webpHTML       = require('gulp-webp-html');
const webpcss        = require("gulp-webpcss");
const babel          = require('gulp-babel');
const uglify         = require('gulp-uglify-es').default;
const svgSprite      = require('gulp-svg-sprite');
const ttf2woff       = require('gulp-ttf2woff');
const ttf2woff2      = require('gulp-ttf2woff2');
const fonter         = require('gulp-fonter');


const { src, dest, series, parallel } = require('gulp');
const fs = require('fs');

let mainFolder = 'dist';
let sourceFolder = 'src';

let path = {
    build: {
        html: mainFolder + '/',
        css: mainFolder + '/css/',
        js: mainFolder + '/js/',
        img: mainFolder + '/img/',
        icons: mainFolder + '/icons/',
        fonts: mainFolder + '/fonts/',
        notMinified: mainFolder + '/notMinified/'
    },
    src: {
        html: sourceFolder + '/*.html',
        htmlModules: sourceFolder + '/htmlModules/',
        css: sourceFolder + '/sass/style.scss',
        js: sourceFolder + '/js/*.js',
        jsModules: sourceFolder + '/js/modules/',
        img: sourceFolder + '/img/**/*.+(png|jpg|webp)',
        icons: [sourceFolder + '/icons/**/*', '!' + sourceFolder + '/icons/svg/**'],
        fonts: sourceFolder + '/fonts/*.ttf'
    },
    watch: {
        html: sourceFolder + '/**/*.html',
        css: sourceFolder + '/sass/**/*.+(scss|sass|css)',
        js: sourceFolder + '/js/**/*.js',
        img: sourceFolder + '/img/**/*.+(png|jpg|webp)',
        icons: sourceFolder + '/icons/**/*',
        fonts: sourceFolder + '/fonts/*'
    },
    clean: './' + mainFolder + '/'
};

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './' + mainFolder + '/'
        },
        port: 3000,
        notify: false
    });
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], styles);
    gulp.watch([path.watch.js], scripts);
    gulp.watch([path.watch.img], { events: 'unlink' }, delImg);
    gulp.watch([path.watch.img], { events: 'all' }, images);
    gulp.watch([path.watch.icons], { events: 'unlink' }, delIcons);
    gulp.watch([path.watch.icons], { events: 'all' }, iconsTask);
}

function clean() {
    return del(path.clean);
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude({
            basepath: path.src.htmlModules
        }))
        .pipe(webpHTML())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream());
}

function styles() {
    return src(path.src.css)
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(webpcss({webpClass: '.webp', noWebpClass: '.no-webp'}))
        .pipe(dest(path.build.notMinified + 'css/'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream());
}

function images() {
    return src(path.src.img)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(imagemin([
            imgCompress({
                loops: 4,
                min: 70,
                max: 80,
                quality: 'high'
            }),
            imagemin.gifsicle(),
            pngquant({
                speed: 1,
                quality: [0.8, 0.93]
            }),
            imagemin.svgo()

        ]))
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream());
}

function icons() {
    return src(path.src.icons)
        .pipe(dest(path.build.icons))
        .pipe(browserSync.stream());
}

function sprite() {
    return gulp.src([sourceFolder + '/icons/svg/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest(path.build.icons))
        .pipe(browserSync.stream());
}

function delImg() {
    return del.sync('dist/img/*', { force: true });
}
function delIcons() {
    return del.sync('dist/icons/*', { force: true });
}

function fontsToTtf() {
    return src([sourceFolder + '/fonts/*', '!' + sourceFolder + '/fonts/*.+(ttf|woff|woff2)'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest([sourceFolder + '/fonts/']));
}

function fontsToWoff() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.stream());
}

function delFonts() {
    return del(path.build.fonts);
}

function fontsInsert() {

    let fileContent = fs.readFileSync(sourceFolder + '/sass/libs/_fonts.scss');
    if (fileContent == '') {
        fs.writeFile(sourceFolder + '/sass/libs/_fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let fontnameC;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (fontnameC != fontname) {
                    fs.appendFile(sourceFolder + '/sass/libs/_fonts.scss',
                        '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n',
                        cb);
                    }
                    fontnameC = fontname;
                }
            }
        });
    }
}
    
function cb() {}

function scripts() {
    return src(path.src.js)
        .pipe(fileinclude({
            basepath: path.src.jsModules
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest(path.build.notMinified + 'js/'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream());
}

const iconsTask = series(icons, sprite);
const fontsConvert = series(delFonts, fontsToTtf, fontsToWoff);
const build = series(clean, parallel(html, styles, images, iconsTask, scripts), fontsConvert);
const watch = parallel(build, watchFiles, browsersync);

exports.html = html;
exports.styles = styles;
exports.images = images;
exports.icons = icons;
exports.sprite = sprite;
exports.delFonts = delFonts;
exports.fontsToTtf = fontsToTtf;
exports.fontsToWoff = fontsToWoff;
exports.fontsInsert = fontsInsert;
exports.fontsConvert = fontsConvert;
exports.scripts = scripts;
exports.watchFiles = watchFiles;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;