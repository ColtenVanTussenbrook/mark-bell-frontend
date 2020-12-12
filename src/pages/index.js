import React from "react";
import Layout from "../components/layout";
import SocialLinks from "../components/socialLinks";
import SEO from "../components/seo";
import { Link }  from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Colten Van Tussenbrook" />
    <div className="md:flex flex-row items-center pt-4 lg:pt-24">
      <div className="pers-info md:w-4/5 md:border-r-4 md:pr-8 border-white">
        <h1 className="text-gray-500 text-3xl md:text-4xl">Hi, I'm</h1>
        <h1 className="text-3xl md:text-7xl lg:text-9xl text-white mb-10">Colten<span className="text-gray-500"> Van Tussenbrook</span></h1>
        <p className="text-xl md:text-3xl mb-10">I'm a software engineer in <span className="text-gray-500">Salt Lake City</span>. I build modern apps and websites that have a clean design and are easy for people to use.</p>
        <p className="text-lg" >I'm currently taking on freelance projects, <Link to="/freelance">contact me here</Link> if you're looking for a developer!</p>
      </div>
      <div className="pers-links pl-2 lg:pl-8 md:w-1/5">
        <SocialLinks display={"block"} />
      </div>
    </div>
  </Layout>
)

export default IndexPage;
