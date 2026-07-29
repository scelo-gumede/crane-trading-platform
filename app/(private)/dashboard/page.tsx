import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'


const page = async () => {

  const session= await auth()

  if(!session){
    redirect("/login")
  }


  

  return (
    <div>dashboard in by user {session.user?.email} with price </div>
  )
}

export default page