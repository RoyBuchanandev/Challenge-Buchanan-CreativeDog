import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[1440px] px-8 w-full mx-auto">
      { children }
    </div>
  )
}

export default Wrapper