import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials" 
import bcryptjs from "bcryptjs"
import { loginSchema } from "./schema/auth/auth"
import { prisma } from "./lib/prisma"



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials:{
            email:{},
            password:{}
        },
        authorize:async (credentials)=>{

            const email = credentials.email as string
            const password = credentials.password as string

            const parsedData= loginSchema.safeParse({email,password})

            if(!parsedData.success){
                return null
            }

            const getUser = await prisma.user.findUnique({
                where: {
                    email,
                        },
                    })
            if(!getUser){
                return null
            }

            const passwordMatch= await bcryptjs.compare(password,getUser.password)
            
            if(!passwordMatch){
                return null
            }

                return {
                    id:getUser.id.toString(),
                    email:getUser.email
                }

        }
    })
  ],
})