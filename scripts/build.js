let fs = require('fs');
let sass = require('sass');


! function () {
    let result = sass.renderSync({
        file: 'src/base.scss',
        outputStyle: 'compressed'
    });

    fs.writeFileSync('public/base.css', result.css);
}();


! function () {
    let result = sass.renderSync({
        file: 'src/main.scss',
        outputStyle: 'compressed'
    });

    fs.writeFileSync('public/main.css', result.css);
}();
