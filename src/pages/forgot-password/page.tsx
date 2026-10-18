import { lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'

const ForgotPasswordForm = lazy(() => import('./ForgotPasswordForm'))

export default function ForgotPassword() {
  return (
    <ClientOnly>
      {() => (
        <Suspense fallback={null}>
          <ForgotPasswordForm />
        </Suspense>
      )}
    </ClientOnly>
  )
}
