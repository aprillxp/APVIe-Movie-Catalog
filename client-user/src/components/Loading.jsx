import React from 'react'
import loader from "../assets/loader.gif";

const Loading = () => {
  return (
    <div className="text-center text-black font-bold m-auto ">
    <div className="m-auto">
      {/* <img src={loader} alt="mana" className="m-auto w-10" /> */}
      <span className="loading loading-dots loading-md text-yellow-500"></span>
    </div>
  </div>
  )
}

export default Loading