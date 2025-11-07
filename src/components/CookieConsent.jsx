"use client";

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, дал ли пользователь уже согласие
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          Мы используем файлы cookie для улучшения работы сайта. 
          Продолжая использовать сайт, вы соглашаетесь с этим.
        </p>
        <div className={styles.buttons}>
          <button className={styles.acceptBtn} onClick={acceptCookies}>
            Принять
          </button>
          <button className={styles.declineBtn} onClick={declineCookies}>
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;