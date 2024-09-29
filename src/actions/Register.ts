'use server'

import { redirect } from "next/navigation"

export default async function Register(formData: FormData) {
    console.log('name:', formData.get('name'))
    console.log('family:', formData.get('family'))
    console.log('email:', formData.get('email'))
    console.log('password:', formData.get('password'))
    console.log('confirm_password:', formData.get('confirm_password'))

    // check in db

    redirect('/serverAction')
}