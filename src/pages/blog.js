import React from 'react';
import PostPreview from '../components/postPreview';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => (
    <Layout>
    <SEO title="About Colten Van Tussenbrook" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading">Blog</h1>
      {data.allWordpressPost.edges.map(post => {
            return (
                <div key={post.node.id}>
                <PostPreview postInfo={post.node} />
                </div>
            );
        })}
    </div>
    </Layout>
)

export default Blog;

export const query = graphql`
  query {
    allWordpressPost {
        edges {
            node {
                id
                content
                date
                slug
                title
            }
        }
    }
  }
`