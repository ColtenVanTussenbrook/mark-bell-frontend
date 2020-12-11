import React from "react";
import SocialLinks from "../components/socialLinks";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({ data }) => (
  <Layout>
    <SEO title="About Colten Van Tussenbrook" />
    <div className="pt-6 md:pt-12">
      <h1 className="page-heading" dangerouslySetInnerHTML={{__html: data.wordpressPage.title}} />
      <div className="flex-col md:flex-row flex">
        <div className="text-2xl md:text-3xl mb-10 text-block md:pr-12" dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
        <div className="w-12/12 md:w-6/12 m-0 mb-8 md:mb-0"><img src={data.wordpressWpMedia.source_url} alt={data.wordpressWpMedia.alt_text} /></div>
      </div>
      
    </div>
    <div>
      <SocialLinks display={"inline-block"}/>
    </div>
  </Layout>
)

export default About;

export const query = graphql`
  query {
    wordpressPage(slug: { eq: "about" }) {
        title
        content
    }
      wordpressWpMedia(wordpress_id: {gt: 10}) {
      source_url
      alt_text
      wordpress_id
    }
  }
`
