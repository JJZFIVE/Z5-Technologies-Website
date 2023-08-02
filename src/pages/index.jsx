import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  SoundCloudIcon,
  LinkedInIcon,
  TwitterIcon,
  ResumeIconHome,
} from '@/components/SocialIcons'
import rightHear from '@/images/logos/righthear.png'
import rspctbasketball from '@/images/logos/rspctbasketball.png'
import ozura from '@/images/logos/ozura.png'
import memAi from '@/images/logos/mem-ai.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllProjects } from '@/lib/getAllProjects'
import { BeakerIcon } from '@heroicons/react/24/outline'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card as="project">
      <Card.Title href={`/projects/${project.slug}`}>
        {project.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={project.date} decorate>
        {/* {formatDate(project.date)} */}
        {project.date}
      </Card.Eyebrow>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>Learn More</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500  transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

function BetaTest() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BeakerIcon className="h-6 w-6 text-gray-400" />
        <span className="ml-3 text-sm">Look out for KovoAI</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I&apos;m hacking away at a KovoAI, an AI personal fitness trainer that
        learns about you over time. I&apos;m applying my new prooompt
        engineering skills I learned at Mem.Ai, and I&apos;m teaching myself
        PyTorch & SciKit Learn to provide fine-tuned personalization to work
        with your workout preferences and injuries.
      </p>
      <div className="text w-full pt-4 text-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.kovoai.com"
          className="text-black underline dark:text-white"
        >
          Find The Website Here!
        </a>
      </div>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Mem.Ai',
      title: 'Software Engineer',
      logo: memAi,
      time: 'Su 2023',
      link: 'https://get.mem.ai',
    },
    {
      company: 'Ozura',
      title: 'Software / Blockchain Engineer',
      logo: ozura,
      time: 'Su 2022',
      link: 'https://ozura.io/',
    },
    {
      company: 'RSPCT Basketball',
      title: 'Data Science Engineer',
      logo: rspctbasketball,
      time: 'Wi 2021 - Sp 2022',
      link: 'https://www.rspctbasketball.com/',
    },
    {
      company: 'Right-Hear',
      title: 'Strategy Consultant',
      logo: rightHear,
      time: 'Sp 2021 - Su 2021',
      link: 'https://www.right-hear.com/',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div
              type="button"
              className=" relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <a href={role.link} target="_blank" rel="noreferrer">
                <Image
                  src={role.logo}
                  alt=""
                  className="h-7 w-7 rounded-full"
                  unoptimized
                />
              </a>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                <time dateTime={role.time}>{role.time}</time>{' '}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ projects }) {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300 sm:text-5xl">
            <span className="text-zinc-900 dark:text-zinc-100">
              Joe Zakielarz:
            </span>{' '}
            Software engineer, mechanical engineer, co-founder of $100k/yr LLC
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Joe, and I&apos;m a software engineer and mechanical
            engineer in my senior year at Duke University. I love building B2C
            products and am recruiting for post-grad SWE opportunities.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/joezakielarz"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/JJZFIVE"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/joezakielarz5"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://soundcloud.com/intrynzic/tracks"
              aria-label="Follow on SoundCloud"
              icon={SoundCloudIcon}
            />
            <SocialLink
              href="https://drive.google.com/file/d/1dJU8D5DUuiwtzdFq1D6gAXBwsafsKL9i/view?usp=sharing"
              aria-label="See my Resume"
              icon={ResumeIconHome}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-12 md:mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h2 className="text-xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300 sm:text-2xl">
              Technical Projects
            </h2>
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <BetaTest />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      projects: (await getAllProjects())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
