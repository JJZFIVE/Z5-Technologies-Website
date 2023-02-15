import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllProjects } from '@/lib/getAllProjects'

function Project({ project }) {
  return (
    <project className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/projects/${project.slug}`}>
          {project.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={project.date}
          className="md:hidden"
          decorate
        >
          {/* {formatDate(project.date)} */}
          {project.date}
        </Card.Eyebrow>
        <Card.Description>{project.description}</Card.Description>
        <Card.Cta>Read project</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={project.date}
        className="mt-1 hidden md:block"
      >
        {/* {formatDate(project.date)} */}
        {project.date}
      </Card.Eyebrow>
    </project>
  )
}

export default function ProjectsIndex({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="All of my notable projects" />
      </Head>
      <SimpleLayout
        title="My notable projects in software engineering and beyond"
        intro="Here's a list of what I'm proud of. I learn from every project I work on, and I'm always looking for new challenges. Feel free to read more about any of these projects, or get in touch if you'd like to work together."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: (await getAllProjects()).map(({ component, ...meta }) => meta),
    },
  }
}
