'use server'
import { prisma } from "@/lib/prisma"
import { registerSchema, registerSchemaType } from "@/schema/auth/auth"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

import { AuthError } from "next-auth"

export const registerAction = async (previousState:any,data:any)=>{

    const password= data.password as string
    const email= data.email as string
    const confirmPassword= data.confirmPassword as string

    const parsedData= registerSchema.safeParse({email,password,confirmPassword})

    if(!parsedData.success){
        return {
            success:false,
            message:"the passed data is not correct"
        }
    }


    const hashedPass = bcrypt.hashSync(password,10)

    try{
        const savedData = await prisma.user.create({
        data:{
            email,
            password:hashedPass
        }
    })
       
    }catch(error){
        console.log(error)
        return {
            message:"an error occured scelo",
            success:false
        }

    }

    

    
     redirect("/login")


}