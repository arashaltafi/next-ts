"use client"

import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

type IFormInput = {
    firstName: string
    lastName: string
    email: string
    age: number
    password: string
    confirmPassword: string
    gender: GenderEnum
}

const ReactHookForm = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('نام را وارد نمایید.').min(2, 'نام باید بیشتر از 2 کاراکتر باشد').max(10, 'نام باید کمتر از 10 کاراکتر باشد'),
        lastName: yup.string().required('نام خانوادگی را وارد نمایید.').min(3, 'نام خانوادگی باید بیشتر از 3 کاراکتر باشد').max(15, 'نام خانوادگی باید کمتر از 15 کاراکتر باشد'),
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        age: yup.number().positive().min(18).max(100).integer().required('سن را وارد نمایید.'),
        password: yup.string().min(4).max(15).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('رمز عبور را وارد نمایید.'),
        confirmPassword: yup.string().min(4).max(15).oneOf([yup.ref('password')], 'رمز عبور با تکرار آن یکسان نیست.').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('تکرار رمز عبور را وارد نمایید.'),
        gender: yup.mixed<GenderEnum>().oneOf([GenderEnum.female, GenderEnum.male, GenderEnum.other]).required('جنسیت را وارد نمایید.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    useEffect(() => {
        console.log('test render')
    })

    return (
        <div className='flex flex-col gap-8 items-center justify-start w-full'>
            <h1>ReactHookForm Sample</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <label>FirstName:</label>
                <input className='p-3 m-2 text-black text-lg' type="text" placeholder='Enter FirstName ...' {...register('firstName', { required: true, minLength: 2, maxLength: 10 })} />
                {errors.firstName && <p className='text-red-500'>{errors.firstName?.message}</p>}

                <label>LastName:</label>
                <input className='p-3 m-2 text-black text-lg' type="text" placeholder='Enter LastName ...' {...register('lastName')} />
                {errors.lastName && <p className='text-red-500'>{errors.lastName?.message}</p>}

                <label>Email:</label>
                <input className='p-3 m-2 text-black text-lg' type="email" placeholder='Enter Email ...' {...register('email')} />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                <label>Age:</label>
                <input className='p-3 m-2 text-black text-lg' type="number" placeholder='Enter Age ...' {...register('age')} />
                {errors.email && <p className='text-red-500'>{errors.age?.message}</p>}

                <label>Password:</label>
                <input className='p-3 m-2 text-black text-lg' type="text" placeholder='Enter Password ...' {...register('password')} />
                {errors.email && <p className='text-red-500'>{errors.password?.message}</p>}

                <label>ConfirmPassword:</label>
                <input className='p-3 m-2 text-black text-lg' type="text" placeholder='Enter ConfirmPassword ...' {...register('confirmPassword')} />
                {errors.email && <p className='text-red-500'>{errors.confirmPassword?.message}</p>}

                <label>Gender Selection:</label>
                <select {...register("gender")} className='text-black'>
                    <option className='text-black' value="female">female</option>
                    <option selected className='text-black' value="male">male</option>
                    <option className='text-black' value="other">other</option>
                </select>
                {errors.gender && <p className='text-red-500'>{errors.gender?.message}</p>}

                <button className='m-4 p-4 bg-sky-500 text-white text-2xl' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHookForm