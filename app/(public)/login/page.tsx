'use client'
import React from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Field,FieldLabel } from '@/components/ui/field';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "@/schema/auth/auth";
import { z } from "zod";
import {useActionState , startTransition} from "react";
import { loginAction } from '@/actions/login';
import Link from 'next/link';


export type loginSchemaType = z.infer<typeof loginSchema>



const page = () => {
    const[state, formAction, isPending] = useActionState(loginAction,{success:false,message:""})
    const{register ,handleSubmit,formState:{errors}}= useForm<loginSchemaType>({resolver:zodResolver(loginSchema)})


    function onSubmit(data:loginSchemaType){
        
        
        startTransition(()=>{
            formAction(data)
        })
    }

    console.log(state)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-[400px] mx-auto mt-20'>
        <Field  >
            <FieldLabel>Email</FieldLabel>
            <Input type="email" {...register("email")}  placeholder="Enter your email" />
            {errors.email && <span>{errors.email.message}</span>} 
        </Field>
        <Field>
            <FieldLabel>Password</FieldLabel>
            <Input type="password" {...register("password")} placeholder="Enter your password" />
        </Field>
        <Button onClick={handleSubmit(onSubmit)} className='cursor-pointer'>Login</Button>  
        <Button  className='cursor-pointer' variant="outline"><Link href="register">register</Link></Button>
    </form>
  )
}

export default page