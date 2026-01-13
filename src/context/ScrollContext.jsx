import { createContext, useContext } from 'react'

export const ScrollContext = createContext(null)

export const useLocomotiveScroll = () => useContext(ScrollContext)
