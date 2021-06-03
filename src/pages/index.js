import React from "react";
import { Link }  from "gatsby";

const Index = () => {
  return (
    <main className="hero-background flex text-center text-mb-yellow flex-col mx-auto">
      <h1 className="px-4 text-4xl pt-24">
        MARK BELL
      </h1>
      <Link to="/portraits-of-saying-goodbye" className="text-6xl font-bold flex items-center justify-center h-screen pb-32">
        ENTER
      </Link>
    </main>
  )
}

export default Index;
