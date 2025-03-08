import React from 'react'

const AdminUserSidebar = () => {
  return (
    <div>
      {/* title */}
      <div className = "w-[15vw] bg-[#060433] font-changa relative font-bold text-white text-center">
        <p className = "text-xl">Services</p>
      </div>

      {/* services */}
      <div className = "w-[15vw] bg-[white] border-solid border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Get all users</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Get user by username</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Update user by username</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Update username, firstname, lastname, email</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Add user's personal formation</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Update user's specified formation</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Delete user's specified formation</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Update user's avatar</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Add user's favorite team</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Remove user's favorite team</p>
      </div>
      <div className = "w-[15vw] bg-[white] border-b-gray-500 border-b-[1px] hover:bg-[#e0e072] hover:cursor-pointer">
        <p className = "font-changa relative left-[1vw] py-[0.5rem]">Delete user by user ID</p>
      </div>
    </div>
  )
}

export default AdminUserSidebar
