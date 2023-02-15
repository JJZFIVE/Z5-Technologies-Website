import Head from 'next/head'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  SoundCloudIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className={`group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 `}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Joe Zakielarz." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="mx-auto max-w-xs px-2.5 lg:mx-0 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                draggable={false}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square -rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi! I&apos;m Joe. I make things.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a junior at Duke University majoring in Mechanical
                Engineering and minoring in Computer Science. I simply love
                learning and building things, and often I infuse my sense of
                humor into my projects.
              </p>
              <p>
                I&apos;ve been hooked on writing software since I built my first
                iPhone app in 5th grade called Bomb Blitz where the goal was to
                tap the screen to &quot;diffuse&quot; bombs falling from every
                edge of your phone. Since then, my skills have (somewhat)
                improved... but the same eager curiosity has remained.
              </p>
              <p>
                I spent the summer of 2022 working in Miami building an NFT
                marketplace called{' '}
                <Link href="/projects/blockstreet" legacyBehavior>
                  <a className="text-zinc-700 underline dark:text-zinc-300">
                    BlockStreet
                  </a>
                </Link>{' '}
                and learned a ton about the blockchain space.
              </p>
              <p>
                I&apos;ve been making and releasing electronic music and remixes
                under the stage name{' '}
                <a
                  className="text-zinc-700 underline dark:text-zinc-300"
                  href="https://soundcloud.com/intrynzic/tracks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Intrynzic
                </a>{' '}
                since high school. I&apos;m fascinated with digital signal
                processing and the intersection of music and technology. Feel
                free to check out some of my stuff if you have a free second!
              </p>
              <p>
                I&apos;m currently looking for an internship for Summer 2023.
                The metric I&apos;m optimizing for is skill development and
                learning potential. I&apos;d greatly appreciate any leads or any
                advice you have to offer! Feel free to shoot me an email or
                connect with me on LinkedIn.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/JJZFIVE"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                className="py-1"
              >
                GitHub
              </SocialLink>

              <SocialLink
                href="https://twitter.com/joezakielarz"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                className="py-1"
              >
                Twitter
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/joezakielarz5"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="py-1"
              >
                LinkedIn
              </SocialLink>

              <SocialLink
                href="https://soundcloud.com/intrynzic/tracks"
                aria-label="Follow on SoundCloud"
                icon={SoundCloudIcon}
                className="py-1"
              >
                SoundCloud
              </SocialLink>

              <SocialLink
                href="mailto:jjzfive@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jjzfive@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
