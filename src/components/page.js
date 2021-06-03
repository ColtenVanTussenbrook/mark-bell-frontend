import React from "react"
import Layout from "../pages/layout"
import Header from "../components/header"

const Page = ({ children }) => {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default Page
