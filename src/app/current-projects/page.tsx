import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

export const metadata: Metadata = {
  title: 'Current Projects - RLJ Enterprise',
  description: 'Explore RLJ Enterprise’s current housing and community development projects across Connecticut.',
}

const projects = [
  {
    street: 'Roath Street',
    city: 'Norwich, CT',
    type: 'Affordable Housing',
    detail: '54 Units',
    description: 'Creating quality, attainable homes at scale to strengthen the Norwich community.',
    icon: 'building',
  },
  {
    street: 'Garden Street',
    city: 'Hartford, CT',
    type: 'New Construction',
    detail: '2-Family Homeownership',
    description: 'Building a new two-family residence designed to expand pathways to homeownership.',
    icon: 'home',
  },
  {
    street: 'Laurel Street',
    city: 'Hartford, CT',
    type: 'Gut Rehabilitation',
    detail: 'Residential Renewal',
    description: 'Reimagining an existing property through a comprehensive renovation from the inside out.',
    icon: 'renew',
  },
  {
    street: 'Cabot Street',
    city: 'Hartford, CT',
    type: 'Gut Rehabilitation',
    detail: 'Residential Renewal',
    description: 'Restoring a Hartford property to create a safe, modern home with lasting community value.',
    icon: 'renew',
  },
]

function ProjectIcon({ type }: { type: string }) {
  if (type === 'building') {
    return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 21h16M6 21V4.5A1.5 1.5 0 0 1 7.5 3h6A1.5 1.5 0 0 1 15 4.5V21m0-12h2.5A1.5 1.5 0 0 1 19 10.5V21M9 7h3m-3 4h3m-3 4h3m-3 6v-2h3v2" />
  }

  if (type === 'home') {
    return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="m3 11 9-8 9 8m-2 0v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9m4 10v-6h6v6" />
  }

  return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 11a8 8 0 1 0-2.34 5.66M20 4v7h-7m-5.5 1.5 3 3 6-7" />
}

export default function CurrentProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="relative overflow-hidden bg-secondary-900 pt-44 pb-24 lg:pt-52 lg:pb-28">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-primary-300" />
          <div className="absolute -right-4 top-8 h-64 w-64 rounded-full border border-primary-400" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-700 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-primary-300">
              Building Connecticut’s future
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
              Current <span className="text-primary-400">Projects</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-secondary-200 md:text-xl">
              Thoughtful development that creates homes, restores properties, and opens new possibilities for Connecticut communities.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="project-list-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 font-semibold uppercase tracking-widest text-primary-600">Our work in progress</p>
                <h2 id="project-list-heading" className="text-4xl font-bold text-secondary-900 md:text-5xl">
                  Developing with purpose
                </h2>
              </div>
              <p className="max-w-lg text-lg leading-relaxed text-secondary-600">
                Each project reflects our commitment to housing opportunity, neighborhood investment, and enduring impact.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.street} animationType="fade-up" delay={index * 120}>
                <article className="group h-full overflow-hidden rounded-2xl border border-secondary-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-400" />
                  <div className="p-7 sm:p-9">
                    <div className="mb-8 flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <ProjectIcon type={project.icon} />
                        </svg>
                      </div>
                      <span className="rounded-full bg-secondary-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-secondary-600">
                        Current
                      </span>
                    </div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-600">{project.city}</p>
                    <h3 className="text-3xl font-bold text-secondary-900">{project.street}</h3>
                    <div className="my-6 flex flex-wrap gap-3">
                      <span className="rounded-md bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-700">{project.type}</span>
                      <span className="rounded-md bg-secondary-100 px-3 py-2 text-sm font-semibold text-secondary-700">{project.detail}</span>
                    </div>
                    <p className="leading-relaxed text-secondary-600">{project.description}</p>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollAnimation animationType="fade-up">
            <p className="text-2xl font-semibold leading-relaxed text-secondary-800 md:text-3xl">
              “We don’t just develop properties. We invest in the future of communities.”
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
