import React from 'react'
import workspaceprovider from './provider'

function Workspacelayout({children}) {
  return (
    <div>
        <workspaceprovider>
             {children}
        </workspaceprovider>

    </div>
  )
}

export default Workspacelayout
