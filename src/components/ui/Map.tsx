const YANDEX_MAP_URL =
  'https://yandex.ru/map-widget/v1/?ll=46.029315%2C51.522283&mode=search&oid=103694209198&ol=biz&z=16'

export default function Map() {
  return (
    <div className="h-[380px] w-full overflow-hidden border border-brand-black">
      <iframe
        src={YANDEX_MAP_URL}
        title="Карта проезда в LariBrand"
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}
