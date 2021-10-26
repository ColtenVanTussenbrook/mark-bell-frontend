import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import hamburger from '../assets/images/hamburger-blue.png';
import x from '../assets/images/x-blue.png';
import insta from '../assets/images/instagram.png';

export default function Header () {

  const dataMenu = useStaticQuery(
    graphql`
      query Menu {
        wpMenu {
          menuItems {
            nodes {
              url
              label
              databaseId
            }
          }
        }
      }
    `
  )

  const links = dataMenu.wpMenu.menuItems.nodes;

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

  return (
    <>
      <div className={"md:hidden"}>
        <button onClick={toggleMobileMenu}><img alt="open menu button" className="absolute top-menu right-15" src={menuButton}/></button>
      </div>
      <nav className="md:block sm:pt-3">
        <ul className={"md:block " + isHidden}>
        {links.map((link) => {
          return (
            <li className="text-mb-blue-nav text-base mb-4" key={link.databaseId}>
              <Link to={link.url} activeClassName="active">{link.label}</Link>
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
