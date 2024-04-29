import Link from "next/link"

//npm i react-easy-crop
const ImageCrop = () => {
    return (
        <div className='flex flex-col gap-8 items-center justify-center w-full min-h-screen'>
            <Link href='imageCrop/sample1' className='text-3xl text-center'>Sample1</Link>
            <Link href='imageCrop/sample2' className='text-3xl text-center'>Sample2</Link>
        </div>
    )
}

export default ImageCrop