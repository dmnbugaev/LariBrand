import CookieConsent from '../components/CookieConsent';
import YandexMetrika from '../components/YandexMetrika';

export const metadata = {
  title: 'LariBrand',
  description: 'Описание вашего сайта',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <CookieConsent />
        <YandexMetrika />
      </body>
    </html>
  );
}