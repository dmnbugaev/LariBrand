import Link from 'next/link'
import React from 'react'

interface LinkFooterProps {
  href: string
  children: React.ReactNode
}

const LinkFooter = React.memo(function LinkFooter({ href, children }: LinkFooterProps) {
  return (
    <Link
      href={href}
      className="w-[55px] h-[55px] bg-brand-red rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
    >
      {children}
    </Link>
  )
})

export default LinkFooter
