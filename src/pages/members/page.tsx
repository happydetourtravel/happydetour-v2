import { lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'

const MembersContent = lazy(() => import('./MembersContent'))

export default function Members() {
  return (
    <ClientOnly>
      {() => (
        <Suspense fallback={null}>
          <MembersContent />
        </Suspense>
      )}
    </ClientOnly>
  )
}
