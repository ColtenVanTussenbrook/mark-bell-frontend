import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function BlogPostTemplate ({ data }) { 

  const date = new Date(data.wordpressPost.date);
  const day = date.getUTCDate().toString();
  const month = date.getMonth();
  const year = date.getUTCFullYear().toString();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateStr = monthNames[month] + " " + day + ", "  + year;
  const authorName = data.wordpressPost.author.name;

  return(
    <Layout>
      <SEO
        title={data.wordpressPost.title}
      />
      <div className="inner-container">
        <div className="blog-post my-16 md:my-24">
          <h1 className="text-gray-500 text-4xl md:text-5xl underline">{data.wordpressPost.title}</h1>
          <i>Written by: {authorName}</i><span> || </span><i>Published: {dateStr}</i>
          <div className="mt-8 blog-post-content" dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
        </div>
      </div>
    </Layout>
  );
  
}
export default BlogPostTemplate;

export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            title
            content
            date
            author {
              name
            }
        }
    }
`