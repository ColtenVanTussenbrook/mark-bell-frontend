import React from 'react';

const Footer = () => {
  return (
    <div className="mt-8 flex-initial w-full">
      <hr />
      <div className="ml-2 lg:ml-12 my-4">
          {<p className="text-xs">&copy; {new Date().getFullYear()} Designed And Built By Me. See the source code <a href="https://github.com/ColtenVanTussenbrook/colt-blog" className="underline" target="_blank" rel="noopener noreferrer">here</a>.</p>}
      </div>
    </div>
  )  
}

export default Footer;