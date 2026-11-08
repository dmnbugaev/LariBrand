# Медиа-конвейер акций LariBrand

Все команды выполняются из любой папки; пути передавай аргументами. ffmpeg —
`/opt/homebrew/bin/ffmpeg` (если в какой-то среде запрещён, запасной вариант на
macOS — штатный `/usr/bin/avconvert --preset PresetHighestQuality --output out.mp4`,
но он не даёт контроля размера). Исходники лежат у пользователя в
`~/Downloads/Telegram Desktop/`, назначение — `public/promo/`.

## 1. Видео MOV → MP4 (H.264, web-оптимизированный)

iPhone-видео уже H.264+AAC, поэтому это лёгкий ренкод ради размера и faststart:

```bash
SRC="~/Downloads/Telegram Desktop/IMG_1234.MOV"
DST="public/promo"

/opt/homebrew/bin/ffmpeg -hide_banner -loglevel error -y \
  -i "$SRC" \
  -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 96k -movflags +faststart \
  "$DST/IMG_1234.mp4"
```

Целевой размер ~1.5–3 МБ на 10–15 с. Автовоспроизведение в карточках — muted +
loop + playsInline, звук можно оставлять.

Проверить что получилось:
```bash
/opt/homebrew/bin/ffprobe -v quiet -show_entries format=duration:stream=codec_name,width,height -of default=nw=1 "$DST/IMG_1234.mp4"
```

## 2. Постер для видео (кадр + миниатюра)

Кадр на 1-й секунде (нулевой кадр бывает чёрным), ширина 720:

```bash
/opt/homebrew/bin/ffmpeg -hide_banner -loglevel error -y \
  -ss 00:00:01 -i "$SRC" -vframes 1 -vf "scale=720:-2" -q:v 4 \
  "$DST/IMG_1234-poster.jpg"
```

Размер ~70–130 КБ. Если постер вышел подозрительно маленьким (<15 КБ) —
вероятно, чёрный кадр: попробуй `-ss 00:00:02`.

## 3. Фото-карточки предложений

sips (штатный macOS) — ресайз до 810px по ширине и пережим:

```bash
sips --resampleWidth 810 --setProperty formatOptions 82 \
  "$SRC/IMG_1235.JPG" --out "$DST/IMG_1235-poster.jpg"
```

Именование держи единое: `<оригинальное имя>-poster.jpg` для карточек
предложений, оригинальное имя без суффикса — для афиши-обложки.

## 4. Афиша-обложка

Копируется как есть (она и OG-картинка; до ~600 КБ — норма):

```bash
cp "$SRC/IMG_1236.JPG" "$DST/IMG_1236.JPG"
```

После копирования проверь фактические размеры (`sips -g pixelWidth -g pixelHeight`)
и подгоните `width/height` в openGraph metadata страницы /promo.

## 5. Удаление старых файлов

Перед удалением `ls public/promo/` и сверь со ссылками в `src/lib/promo.ts`
(старые файлы прошлой акции + старая обложка). Новые имена в конфиге должны
существовать на диске, старые — не должны остаться.

## 6. Рапид-чек всей папки

```bash
ls -la public/promo/
for f in public/promo/*; do file "$f"; done
```

Все JPG — «JPEG image data … baseline», MP4 — не пустые (>1 МБ). Плюс после
запуска dev-сервера: `curl -s -o /dev/null -w "%{http_code} %{content_type}\n" http://localhost:3999<путь>`
для каждого нового файла.
