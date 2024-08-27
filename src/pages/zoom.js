import React from "react"

import SEO from "../components/seo"

import Layout from "../components/Home/index.jsx"

import Page from "../components/ZoomNew/index.jsx"
import ClientOnly from "../components/clientOnly"
const IndexPage = () => (
  <>
    {" "}
    <SEO
      title="Zoom Alternative"
      description="Zoom alternative focused on recruiters. Simplify your workflow, and place more candidates."
    />
    <ClientOnly>
      <Layout>
        <Page />
      </Layout>
    </ClientOnly>
  </>
)

export default IndexPage
