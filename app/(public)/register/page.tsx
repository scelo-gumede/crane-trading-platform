'use client'
import React from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Field,FieldLabel } from '@/components/ui/field';
import { registerAction } from '@/actions/register';
import { registerSchema } from '@/schema/auth/auth';
import {zodResolver} from "@hookform/resolvers/zod";
import {useActionState , startTransition} from "react";
import { useForm } from 'react-hook-form';
import { registerSchemaType } from '@/schema/auth/auth';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';



const page = () => {
    const[state, formAction, isPending] = useActionState(registerAction,{success:false,message:""})
        const{register ,handleSubmit,formState:{errors}}= useForm<registerSchemaType>({resolver:zodResolver(registerSchema)})
    
    
        function onSubmit(data:registerSchemaType){
            
            
            startTransition(()=>{
                formAction(data)
            })
        }

        

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-[400px] mx-auto mt-20'>
        <Field>
            <FieldLabel>Email</FieldLabel>
            <Input  {...register("email")} type="email" placeholder="Enter your email" />
            {errors.email?.message && <span className='text-red-900'>{errors.email?.message}</span>}
        </Field>
        <Field>
            <FieldLabel>Password</FieldLabel>
            <Input  {...register("password")} type="password" placeholder="Enter your password" />
            {errors.password?.message && <span className='text-red-900'>{errors.password?.message}</span>}
        </Field>
       <Field>
            <FieldLabel>Confirm Password</FieldLabel>
            <Input {...register("confirmPassword")} type="password" placeholder="Confirm your password" />
            {errors.confirmPassword?.message && <span className='text-red-900'>{errors.confirmPassword?.message}</span>}
        </Field> 
        <Button type='submit' className='cursor-pointer' >register</Button>
        <Link className={buttonVariants({variant:"outline"})} href="/login">Login</Link>
        {state.message && <span className='text-red-800'>{state.message}</span>}
    </form>
  )
}

export default page