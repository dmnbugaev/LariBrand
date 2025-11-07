"use client";

import { useEffect } from "react";

export default function YandexMap() {
  useEffect(() => {
    // Проверяем, не добавлен ли уже скрипт
    if (document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa4c44388f23506ce84cd0c42145a6cc5ab329a6cb6819afe9a3f7ae9e6367c4c&amp;width=100%25&amp;height=380&amp;lang=ru_RU&amp;scroll=true";
    
    const mapContainer = document.getElementById("yandex-map");
    if (mapContainer) {
      mapContainer.appendChild(script);
    }

    // Функция очистки
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="yandex-map" 
      style={{
        width: "100%", 
        height: "380px", 
        border: "1px solid #000"
      }} 
    />
  );
}