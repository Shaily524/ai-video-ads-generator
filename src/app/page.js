import {UserButton } from '@clerk/nextjs'
import React from 'react'

function page() {
    return (
 <div>

<h2>Subscribe my channel</h2>
 <button>Subscribe</button> 
<UserButton/>
       </div>
    )
}

export default page