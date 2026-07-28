'use server'

import { loginSchemaType } from '@/schema/auth/auth';
import { loginSchema } from '@/schema/auth/auth';
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { AuthError } from "next-auth";
import { prisma } from '@/lib/prisma';
import Credentials from 'next-auth/providers/credentials';


export const loginAction = async (previousState:any,
  data:any)=>{

    const email = data.email as string;
    const password = data.password as string;

    const passedData = loginSchema.safeParse({email,password})

    if(!passedData.success){
        return {
            success:false,
            message:"error on the entered data "
        }
    }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    redirect("/dashboard");
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          success: false,
          message: "Invalid email or password",
        };
      }
    }

    throw error;
  }
   
}