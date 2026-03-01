import React from 'react'
import CookieConsent from './CookieConsent'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <CookieConsent />
    </>
  )
}

export default Layout
