var gulp = require("gulp"),
    shell = require("gulp-shell"),
    templateCache = require("gulp-angular-templatecache"),
    sass = require("gulp-sass"),
    connect = require("gulp-connect");


var paths = {
    ts: "./src/app/**/*.ts",
    scss: "./src/style/app.scss",
    templates: ["./src/app/**/*.html", "!./src/app/index.html"],
    templatesDest: "./src/app/templates",
    html: "./src/app/index.html",
    temp: "./.tmp",
    dist: "./dist"
};

gulp.task("template-cache", () => {
    return gulp.src(paths.templates)
        .pipe(templateCache({
            filename: "templates.ts",
            module: "templates",
            standalone: "true",
            moduleSystem: "ES6"
        }))
        .pipe(gulp.dest(paths.templatesDest));
});

gulp.task("html", () => {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist));
});

gulp.task("sass", () => {
   return gulp.src(paths.scss)
    .pipe(sass("app.css"))
    .pipe(gulp.dest(paths.dist));
});

gulp.task("sourcemaps", ()=>{
    return gulp.src(paths.ts)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("source.map"))
        .pipe(gulp.dest(paths.dist));
});

gulp.task("watch", () => {
    gulp.watch(paths.templates, ["bundle-sfx"]);
    gulp.watch(paths.ts, ["bundle-sfx"]);
    gulp.watch("./app/style/**/*.scss", ["bundle-sfx"]);
});

gulp.task("connect", () => {
    connect.server({
        root: paths.dist,
        livereload: true
    });
});

gulp.task("bundle-sfx", ["html", "template-cache", "sass"], shell.task([
    `jspm bundle-sfx src/app ${paths.dist}/app.js --source-map-contents`
]));

gulp.task("serve", ["bundle-sfx", "connect", "watch"]);


//Bundle as browser loaded bundle (not self executing - sfx)
gulp.task("bundle", ["html", "template-cache", "sass"], shell.task([
    `jspm bundle src/app src/app/app.js --source-map-contents`
]));

gulp.task("connect-bundle", () => {
    connect.server({
        root: ".",
        livereload: true
    });
});

gulp.task("watch-bundle", () => {
    gulp.watch(paths.templates, ["bundle-sfx"]);
    gulp.watch(paths.ts, ["bundle-sfx"]);
    gulp.watch("./app/style/**/*.scss", ["bundle-sfx"]);
});

gulp.task("serve-bundle", ["bundle", "connect-bundle", "watch-bundle"]);