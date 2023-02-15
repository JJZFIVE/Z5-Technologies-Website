import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  SoundCloudIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Z5() {
  return (
    <>
      <Head>
        <title>Z5 Technologies</title>
        <meta
          name="description"
          content="Z5 Technologies is my personal brand and company"
        />
      </Head>
      <Container className="mt-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300 sm:text-5xl">
            <span className="text-zinc-900 dark:text-zinc-100">
              Z5 Technologies:
            </span>{' '}
            My Personal Brand and Company
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Z5 Technologies LLC is registered in Delaware and is my personal
            brand and company. Every personal project that I build, I build
            under the Z5 Technologies brand. I do this primarily for legal
            protection, but also to help me build a brand that I can use to
            build a business around in the future. More to come here soon.
          </p>
          <div className="py-16" />
        </div>
      </Container>
    </>
  )
}
