// components/Layout.jsx
import CookieConsent from './CookieConsent';

const Layout = ({ children }) => {
  return (
    <>
      {/* Ваш основной контент */}
      <main>{children}</main>
      
      {/* Баннер cookies */}
      <CookieConsent />
    </>
  );
};

export default Layout;