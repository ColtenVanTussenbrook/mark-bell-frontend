import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

const Contact = ({ data }) => (    
  <Layout>
    <div className="text-mb-blue-nav text-center mt-14">
      <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
    </div>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    wpPage(slug: { eq: "contact" }) {
      title
      content
    }
  }
`
