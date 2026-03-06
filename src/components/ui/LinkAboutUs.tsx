import Link from 'next/link'
import React from 'react'

interface LinkAboutUsProps {
  href: string
  children: React.ReactNode
  'aria-label'?: string
}

const LinkAboutUs = React.memo(function LinkAboutUs({ href, children, 'aria-label': ariaLabel }: LinkAboutUsProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="w-[150px] h-[60px] bg-brand-red rounded-[20px] flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 max-[620px]:w-[200px]"
    >
      {children}
    </Link>
  )
})

export default LinkAboutUs
