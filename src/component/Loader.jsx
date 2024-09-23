import React from 'react'

const Loader = () => {
  return (
   
<div class="flex flex-row gap-3 fixed top-0 left-0 justify-center items-center z-50 w-screen h-screen bg-[#000000d3] overflow-hidden">
  <div class="w-6 h-6 rounded-full bg-[#D9232E] animate-bounce"></div>
  <div
    class="w-6 h-6 rounded-full bg-[#D9232E] animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    class="w-6 h-6 rounded-full bg-[#D9232E] animate-bounce [animation-delay:-.5s]"
  ></div>
</div>

  )
}

export default Loader
