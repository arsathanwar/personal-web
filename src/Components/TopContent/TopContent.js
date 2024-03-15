import React from 'react'
import {Link} from 'react-scroll'
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Mohamed Arsath</h1>
            <p>
             I am a Passionate Web Developer
            </p>
             <a>
                <button className='topContent__cvButton'>Download CV</button>
            </a> 
            <Link to='projects' smooth={true} duration={500}>
                <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
