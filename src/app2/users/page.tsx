interface UserType {
    name: string,
    age: number,
    email: string
}

const page = async () => {

    const response = await fetch('https://arashaltafi.ir/test_200.php', {
        next: { revalidate: 20 }
    });

    const data: UserType = await response.json();

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full">
            {
                <p className="w-2/3 text-left text-lg text-sky-500">
                    <span className="text-red-500">{data.age}: </span>{data.name}
                </p>
            }
        </div>
    )
}

export default page