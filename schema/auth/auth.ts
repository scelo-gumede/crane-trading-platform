import { z } from "zod";


export const loginSchema = z.object({
    email:z.email({message:"invalid email address"}),
    password:z.string().min(6,{message:"password must be atleast 6 characters long"})
})

export type loginSchemaType = z.infer<typeof loginSchema>


export const registerSchema = z.object({
    email:z.string().email({message:"iinvalid email address"}),
    password:z.string().min(6,{message:"password must be atleast 6 characters long"}),
    confirmPassword:z.string().min(6,{message:"password must be atleast 6 characters long"})
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type registerSchemaType = z.infer<typeof registerSchema>


