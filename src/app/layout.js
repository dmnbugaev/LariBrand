import CookieConsent from '../components/CookieConsent';

export const metadata = {
  title: 'Ваш сайт',
  description: 'Описание вашего сайта',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}