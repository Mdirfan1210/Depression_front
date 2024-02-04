import React from 'react'
import './Topbar.css'
export default function Topbar() {
  return (
    <div className='Topbar'>
      
      <div className='Menu'>
        <div className='Left'>
            <b><a href='#Intro' className='Logo'>Depression Detection</a></b>
        </div>
        
        <div className='Right'>
            <div className='Container'>
                <b><p><a href='#Background'>Home</a></p></b>
                {/* <p><a href='#Intro'>Intro</a></p> */}
                <b><p><a href='#Upload'>Upload</a></p></b>
                <b><p><a href='#About'>About</a></p></b>
                <b><p><a href='#Contact'>Contact</a></p></b>
            </div>
        </div>
      </div>
     
    </div>
  )
}
