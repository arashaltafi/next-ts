"use client"

import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

const FormikSample = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('نام را وارد نمایید.').min(2, 'نام باید بیشتر از 2 کاراکتر باشد').max(10, 'نام باید کمتر از 10 کاراکتر باشد'),
        lastName: yup.string().required('نام خانوادگی را وارد نمایید.').min(3, 'نام خانوادگی باید بیشتر از 3 کاراکتر باشد').max(15, 'نام خانوادگی باید کمتر از 15 کاراکتر باشد'),
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        age: yup.number().positive().min(18).max(100).integer().required('سن را وارد نمایید.'),
        password: yup.string().min(4).max(15).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('رمز عبور را وارد نمایید.'),
        confirmPassword: yup.string().min(4).max(15).oneOf([yup.ref('password')], 'رمز عبور با تکرار آن یکسان نیست.').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('تکرار رمز عبور را وارد نمایید.'),
        gender: yup.mixed<GenderEnum>().oneOf([GenderEnum.female, GenderEnum.male, GenderEnum.other]).required('جنسیت را وارد نمایید.')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: 0,
            password: '',
            confirmPassword: '',
            gender: GenderEnum.female
        },
        validationSchema: schema,
        validateOnChange: true,
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    useEffect(() => {
        console.log('test render')
    })

    return (
        <div className='flex flex-col gap-8 items-center justify-start w-full'>
            <h1>ReactHookForm Sample</h1>

            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4' autoComplete='off'>
                <label>FirstName:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder='Enter FirstName ...'
                />
                {formik.errors.firstName && <p className='text-red-500'>{formik.errors.firstName}</p>}

                <label>LastName:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder='Enter LastName ...'
                />
                {formik.errors.lastName && <p className='text-red-500'>{formik.errors.lastName}</p>}

                <label>Email:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Enter Email ...'
                />
                {formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}

                <label>Age:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    placeholder='Enter Age ...'
                />
                {formik.errors.email && <p className='text-red-500'>{formik.errors.age}</p>}

                <label>Password:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Enter Password ...'
                />
                {formik.errors.email && <p className='text-red-500'>{formik.errors.password}</p>}

                <label>ConfirmPassword:</label>
                <input
                    className='p-3 m-2 text-black text-lg'
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    placeholder='Enter ConfirmPassword ...'
                />
                {formik.errors.email && <p className='text-red-500'>{formik.errors.confirmPassword}</p>}

                <label>Gender Selection:</label>
                <select
                    className='text-black'
                    id="gender"
                    name='gender'
                    onChange={formik.handleChange}
                >
                    <option selected disabled hidden className='text-black' value="">Please Select</option>
                    <option className='text-black' value="female">female</option>
                    <option className='text-black' value="male">male</option>
                    <option className='text-black' value="other">other</option>
                </select>
                {formik.errors.gender && <p className='text-red-500'>{formik.errors.gender}</p>}

                <button className='m-4 p-4 bg-sky-500 text-white text-2xl' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikSample