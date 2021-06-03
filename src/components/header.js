import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import hamburger from '../assets/images/hamburger-blue.png';
import x from '../assets/images/x-blue.png';
import insta from '../assets/images/instagram.png';



const Header = () => {

  const [isHidden, setIsHidden] = useState("hidden");
  const [menuButton, setMenuButton] = useState(hamburger);

  const toggleMobileMenu = (e) => {
      e.preventDefault();
      if (isHidden === "hidden") {
          setIsHidden("");
          setMenuButton(x);
      } else {
          setIsHidden("hidden");
          setMenuButton(hamburger);
      }
  };

  const links = {
    0: 'Portraits of saying goodbye',
    // 1: 'Did you fall in love last minute',
    // 2: 'Day of the dead',
    3: 'About',
    4: 'Contact'
  }

  return (
    <>
      <div className={"md:hidden"}>
        <button onClick={toggleMobileMenu}><img alt="open menu button" className="absolute top-menu right-15" src={menuButton}/></button>
      </div>
      <nav className="md:block sm:pt-3">
        <ul className={"md:block " + isHidden}>
        {Object.keys(links).map((key) => {
          const slug = links[key].replace(/\s+/g, '-').toLowerCase();
          return (
            <li className="text-mb-blue-nav text-base mb-4" key={key}>
              <Link to={`/${slug}`} activeClassName="active">{links[key]}</Link>
            </li>
          ) 
        })}
        </ul>
        <div className="insta-width">
          <a href="https://www.instagram.com/mrkb.ll/" target="_blank" rel="noreferrer">
            <img src={insta} alt="instagram logo" />
          </a>
        </div>
      </nav>
    </>
  );

}

export default Header;
