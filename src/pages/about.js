import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

const About = ({ data }) => (
  <Layout>
    <div className="text-mb-blue-nav mt-14">
      <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
    </div>
  </Layout>
)

export default About

export const query = graphql`
  query {
    wpPage(slug: { eq: "about" }) {
        title
        content
    }
  }
`
