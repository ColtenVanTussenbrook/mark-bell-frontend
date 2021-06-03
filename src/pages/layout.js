import React from "react"
// import SEO from "../components/seo"
import Header from "../components/header"

const Layout = ({children}) => {

  return (
    <>
      {/* <SEO /> */}
      <div className="flex flex-col md:flex-row min-h-screen container mx-auto mt-16 p-2 md:p-0">
        <header className="md:flex-auto w-2/6">
          <h2 className="text-2xl text-mb-blue-nav md:mb-6">MARK BELL</h2>
          <Header />
        </header>
        <main className="container mx-auto flex-2 pt-6 md:pt-20">{children}</main>
      </div>
    </>
  )
}

export default Layout
