import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';

const UserHiddenCard = () => {
  return (
    <div className = "w-32 h-36 border-dashed relative top-2 rounded-xl" style = {{backgroundColor: "#f0f6f7", borderColor: "gray", borderWidth: "2px"}}>
      <FaPlusCircle className = "relative w-12 h-12" style = {{top: "3rem", left: "2.5rem", color: "gray"}}/>
    </div>
  )
}

export default UserHiddenCard;
