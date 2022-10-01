import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

export const svgSpriteTask = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(cheerio({
      run: ($) => {
        $("[fill]").removeAttr("fill"); // очищаем цвет у иконок по умолчанию, чтобы можно было задать свой
        $("[stroke]").removeAttr("stroke"); // очищаем, если есть лишние атрибуты строк
        $("[style]").removeAttr("style"); // убираем внутренние стили для иконок
      },
      parserOptions: { xmlMode: true },
    })
    )
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
          // Создавать страницу с перечнем иконок
          example: true
        }
      },
    }
    ))
    .pipe(app.gulp.dest(`${app.path.build.images}`));
}