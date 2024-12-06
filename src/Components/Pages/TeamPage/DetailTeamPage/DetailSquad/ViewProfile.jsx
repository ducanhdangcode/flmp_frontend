import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import { FaLongArrowAltRight } from "react-icons/fa";

const ViewProfile = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Noticia Text']
            }
        })
    }, [])
  return (
    <div className = "flex">
      <p className = "text-xl font-noticia-text font-semibold relative hover:underline hover:cursor-pointer">View Profile</p>
      <FaLongArrowAltRight style = {{width: "1.5rem", height: "1.5rem", position: "relative", top: "0.5rem"}}/>
    </div>
  )
}

export default ViewProfile
