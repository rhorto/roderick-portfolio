import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'

export default function NotFound() {
  return (
    <PageWrap>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-8xl font-bold text-gradient mb-4 font-heading">404</p>
          <h1 className="text-2xl font-bold mb-3 font-heading">Page not found</h1>
          <p className="text-sm text-zinc-500 mb-8 max-w-sm mx-auto">
            Looks like this page doesn't exist. Maybe it was redesigned — I do that a lot.
          </p>
          <Link to="/" className="h-11 px-6 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </PageWrap>
  )
}
