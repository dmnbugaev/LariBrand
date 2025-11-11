"use client";

import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Проверяем согласие только на клиенте
    const consent = localStorage.getItem('cookieConsent');
    setHasConsent(consent === 'accepted');
  }, []);

  return hasConsent;
};