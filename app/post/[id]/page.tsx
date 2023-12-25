const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
        {`post id: ${params.id}`}
    </div>
  )
}

export default page