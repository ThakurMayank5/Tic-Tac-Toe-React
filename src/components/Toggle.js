import React from 'react'

export default function Toggle(props) {
    /*
        props:
        change-->function to perform when button is clicked
    */
  return (
    <label htmlFor="check" className=' bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full'  >
      <input type="checkbox" id='check' className="sr-only peer" onClick={props.change}/>
      <span className="w-2/5 h-4/5 bg-cyan-200 absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 transition-all duration-500"></span>
    </label>
  )
}
