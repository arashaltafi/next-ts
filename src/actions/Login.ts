'use server'

import { redirect } from "next/navigation"

export default async function Login(formData: FormData) {
    console.log('email:', formData.get('email'))
    console.log('password:', formData.get('password'))

    // check in db

    redirect('/serverAction')
}