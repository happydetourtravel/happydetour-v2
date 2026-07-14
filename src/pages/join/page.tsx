import { lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'

const JoinForm = lazy(() => import('./JoinForm'))

export default function Join() {
  return (
    <ClientOnly>
      {() => (
        <Suspense fallback={null}>
          <JoinForm />
        </Suspense>
      )}
    </ClientOnly>
  )
}
