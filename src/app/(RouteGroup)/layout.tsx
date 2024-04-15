import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

//hoc sample
const layout = ({ children }: any) => {

    const a = cookies().get('Token')
    console.log('cookies name', a?.name)
    console.log('cookies value', a?.value)

    if (a?.value) {
        return (
            <>{children}</>
        )
    } else {
        redirect('/')
    }
}

export default layout