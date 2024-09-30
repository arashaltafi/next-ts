'use server'

import { redirect } from "next/navigation"

export default async function Login(formData: FormData) {
    const email: string = formData.get('email') as string
    const password: string = formData.get('password') as string
    console.log('email:', email)
    console.log('password:', password)

    // check in db

    if (!password || !email) {
        return "لطفا موارد خواسته شده را وارد نمایید."
    } else if (!password) {
        return "لطفا رمز عبور را وارد نمایید."
    } else if (!email) {
        return "لطفا ایمیل را وارد نمایید."
    } else if (email.includes('@') === false) {
        return "لطفا ایمیل را صحیح وارد نمایید."
    } else if (password.length < 4) {
        return "رمز عبور باید بیشتر از 4 کاراکتر باشد."
    } else {
        redirect('/serverAction')
    }
}