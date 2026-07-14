import { lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'

const VerifyForm = lazy(() => import('./VerifyForm'))

export default function Verify() {
  return (
    <ClientOnly>
      {() => (
        <Suspense fallback={null}>
          <VerifyForm />
        </Suspense>
      )}
    </ClientOnly>
  )
}
