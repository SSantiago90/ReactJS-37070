import React from 'react'

function ErrorMsg({isWarning, text}) {
  return (
    <div className={ isWarning? "bg-yellow-500 py-2 px-8 rounded-md font-bold text-white" : "bg-red-500 py-2 px-8 rounded-md font-bold text-white"}>
      {text}
    </div>
  )
}

export default ErrorMsg