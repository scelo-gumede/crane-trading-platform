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
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const page = () => {
    const[state, formAction, isPending] = useActionState(registerAction,{success:false,message:""})
    const{register ,handleSubmit,formState:{errors}}= useForm<registerSchemaType>({resolver:zodResolver(registerSchema)})
    const[checked,setChecked]=useState(false)
    const[checkError,setCheckError]=useState({message:""})
    
    
        function onSubmit(data:registerSchemaType){
           if (!checked) {
            setCheckError({ message: "Please accept the terms." });
            return;
        }

             setCheckError({ message: "" });

            startTransition(() => {
            formAction(data);
            });
           
        }

    console.log(checked)
        

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-[400px] mx-auto mt-20'>
        
        <header className='text-4xl text-center font-bold'>Join Stockin Dashboard</header>
        <p className='text-center font-bold'>Sign Up For Free</p>
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
        <Field orientation="horizontal">
            <Checkbox className="cursor-pointer" checked={checked} onCheckedChange={setChecked} />
            <FieldLabel>I agree to all Terms, Privacy Policy and Fees</FieldLabel>
        </Field>
        {!checked? <span className='text-red-900'>{checkError.message}</span> :<span></span>  }
        <Button type='submit' className='cursor-pointer' >Get Started</Button>
        <p className='text-center'>Already have an account? <Link href="login" className='font-bold hover:underline'>Login</Link></p>
        {state.message && <span className='text-red-800'>{state.message}</span>}
    </form>
  )
}

export default page