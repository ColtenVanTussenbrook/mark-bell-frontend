import React from "react"
import Layout from "../components/layout"
import SocialLinks from "../components/socialLinks";

const IndexPage = () => (
  <Layout>
    <div className="md:flex flex-row items-center pt-4 lg:pt-24">
      <div className="pers-info md:w-4/5 md:border-r-4 md:pr-8 border-white">
        <h1 className="text-gray-500 text-3xl md:text-4xl">Hi, I'm</h1>
        <h1 className="text-3xl md:text-7xl lg:text-9xl text-white mb-10">Colten<span className="text-gray-500"> Van Tussenbrook</span></h1>
        <p className="text-1xl md:text-3xl mb-10">I'm a software engineer in <span className="text-gray-500">Salt Lake City</span>. I like building cool things like apps and websites.</p>
      </div>
      <div className="pers-links pl-2 lg:pl-8 md:w-1/5">
        <SocialLinks display={"block"} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
