import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>home

      <Button><Link href="login">login</Link></Button>
      <Button><Link href="register">register</Link></Button>
    </div>
  )
}

export default page