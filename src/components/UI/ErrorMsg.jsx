import React from 'react'

function ErrorMsg({isWarning, text}) {
  return (
    <div className={ isWarning? "bg-yellow-300 text-yellow-700 py-2 px-8 rounded-md font-bold text-white mb-3" : "bg-red-300 text-red-700 py-2 px-8 rounded-md font-bold text-white mb-3"}>
      {text}
    </div>
  )
}

export default ErrorMsg 