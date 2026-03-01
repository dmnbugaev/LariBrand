import Link from 'next/link'
import React from 'react'

interface LinkSingUpProps {
  href: string
  children: React.ReactNode
}

const LinkSingUp = React.memo(function LinkSingUp({ href, children }: LinkSingUpProps) {
  return (
    <Link
      href={href}
      className="mx-auto mt-10 max-w-[420px] w-full h-[60px] bg-white rounded-[10px] flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 no-underline uppercase text-brand-black text-[28px] font-forum"
    >
      {children}
    </Link>
  )
})

export default LinkSingUp
