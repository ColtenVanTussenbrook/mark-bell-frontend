import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
    />
    <div className="inner-container">
        <h1 className="text-gray-500 text-5xl underline">{data.wordpressPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    </div>
   </Layout>
)
export default BlogPostTemplate;

export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            title
            content
        }
    }
`