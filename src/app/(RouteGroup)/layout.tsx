import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

//hoc sample
const layout = ({ children }: any) => {

    const getCookie = cookies().get('Token')
    const hasCookie = cookies().has('Token')
    console.log('cookies name', getCookie?.name)
    console.log('cookies value', getCookie?.value)

    if (hasCookie) {
        return (
            <>{children}</>
        )
    } else {        
        redirect('/')
    }
}

export default layout