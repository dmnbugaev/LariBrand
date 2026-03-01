import Link from 'next/link'
import React from 'react'

interface LinkAboutUsProps {
  href: string
  children: React.ReactNode
}

const LinkAboutUs = React.memo(function LinkAboutUs({ href, children }: LinkAboutUsProps) {
  return (
    <Link
      href={href}
      className="w-[150px] h-[60px] bg-brand-red rounded-[20px] flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 max-[620px]:w-[200px]"
    >
      {children}
    </Link>
  )
})

export default LinkAboutUs
