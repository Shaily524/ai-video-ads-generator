"use client"
import { useUser } from '@clerk/nextjs';
import { api } from '../../../convex/_generated/api';
import { useMutation } from 'convex/react'
import React, { useEffect } from 'react'

function workspaceprovider({children}) {
const newUserMutation=useMutation(api.users.CreateNewUser);
const{user}=useUser();
useEffect(()=>{ 
      user&&CreateNewUser()
},[user])

const CreateNewUser= async () => {
const result = await newUserMutation({
name:user?.fullName,
email:user?.primaryEmailAddress?.emailAddress,
picture: user?.imageUrl
})
}
  return (
    <div>
 {children} 
</div>
  )
}

export default workspaceprovider
