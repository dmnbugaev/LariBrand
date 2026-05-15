'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface MenuContextType {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setMenuOpen: () => {},
})

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
