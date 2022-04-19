import { Fragment } from "react"
import { Head } from "minista"
import type { MinistaLocation } from "minista"

import "highlight.js/styles/nord.css"
import "@fontsource/montserrat/800.css"
import "./root.css"

import AppLayout from "./components/app-layout"

export const getStaticData = async () => {
  const apiUrl = "https://api.github.com/repos/qrac/minista"
  const response = await fetch(apiUrl)
  const data = await response.json()
  return {
    props: {
      global: {
        title: data.name,
        description: data.description,
      },
      components: {
        h2: (props) => <h2 className="mdx-components-test" {...props} />,
      },
    },
  }
}

export type GlobalProps = {
  title: string
  description: string
}

export type FrontmatterProps = {
  title?: string
  layout?: string
  draft?: boolean
}

type RootProps = {
  global: GlobalProps
  frontmatter?: FrontmatterProps
  location: MinistaLocation
  children: React.ReactNode
}

const Root = ({ global, frontmatter, location, children }: RootProps) => {
  const ogType = location.pathname === "/" ? "website" : "article"
  const Layout = frontmatter?.layout === "AppLayout" ? AppLayout : Fragment
  return (
    <>
      <Head>
        <title>
          {frontmatter?.title
            ? frontmatter?.title + " | " + global?.title
            : global?.title}
        </title>
        <meta name="description" content={global?.description}></meta>
        <meta property="og:type" content={ogType} />
      </Head>
      <Layout>{children}</Layout>
    </>
  )
}

export default Root