import React from "react"

import SEO from "../components/seo"

import Page from "../components/Home/index.jsx"
import ClientOnly from "../components/clientOnly"

const IndexPage = () => {
  return (
    <>
      {" "}
      <SEO
        title="Video Interviews"
        description="Live and One-Way video interviews for Recruiters."
      />
      {/* <Alert closable style={{ textAlign: 'center' }} showIcon={false} type='info' message={<div><Tag color="blue">New</Tag> <>Live Interviews built for recruiters.</><Link style={{ marginLeft: 8 }} to='/live-interviews'>Learn More</Link></div>} banner /> */}
      <ClientOnly>
        {" "}
        <Page />{" "}
      </ClientOnly>
    </>
  )
}

export default IndexPage
