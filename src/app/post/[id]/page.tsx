const page = ({ params }: { params: { id: string } }) => {
  
  return (
    <div>
        {`post id: ${params.id}`}
    </div>
  )
}

export const generateMetadata = ({ params, searchParams }: any) => {
  return {
    title: `Test title: ${params.id}`,
    description: 'loadingSample description',
  }
}

export default page