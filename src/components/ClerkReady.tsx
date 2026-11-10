import { createContext, useContext } from 'react'

// True once the sign-in system (Clerk) has loaded in the browser.
// Always false while the site is being built, so pages still get their content.
export const ClerkReadyContext = createContext(false)

export function useClerkReady() {
  return useContext(ClerkReadyContext)
}
