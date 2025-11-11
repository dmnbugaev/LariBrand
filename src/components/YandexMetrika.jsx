// components/YandexMetrika.jsx
"use client";

import { useCookieConsent } from '../hooks/useCookieConsent';
import Script from 'next/script';

const YandexMetrika = () => {
  const hasConsent = useCookieConsent();

  // Если нет согласия на cookies - не загружаем метрику
  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105193463', 'ym');

            ym(105193463, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `
        }}
      />
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/105193463" 
            style={{ position: 'absolute', left: '-9999px' }} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;