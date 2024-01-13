import React from 'react'

const SocialLink = ({ url, icon, itemClass }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer" className={itemClass}>
        {' '}
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
