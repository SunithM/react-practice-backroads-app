import React from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              itemClass="footer-icon"
            ></SocialLink>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"> {new Date().getFullYear()} </span> all rights reserved
        <br />
        <span>Made with ❤️ By Sunith ©️</span>
      </p>
    </footer>
  )
}

export default Footer
