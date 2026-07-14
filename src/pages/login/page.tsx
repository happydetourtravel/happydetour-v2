import { lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'

const LoginForm = lazy(() => import('./LoginForm'))

export default function Login() {
  return (
    <ClientOnly>
      {() => (
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      )}
    </ClientOnly>
  )
}
