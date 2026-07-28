import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { getPrice } from '@/actions/td'

const page = async () => {

  const session= await auth()

  if(!session){
    redirect("/login")
  }

  const data =await getPrice()

  console.log(data.props.children.price)

  return (
    <div>dashboard in by user {session.user?.email} with price at {data.props.children.price}</div>
  )
}

export default page