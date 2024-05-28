import React, { useEffect, useState } from 'react'

const Dashboard = ({ list }: { list: { id: number, name: string, item: string[] | undefined }[] }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([0])

  const handleToggleVisibility = (id: number) => {
    if (visibleItems.includes(id)) {
      setVisibleItems(prevState => (prevState.filter(item => item !== id)))
    } else {
      setVisibleItems(prevState => ([...prevState, id]))
    }
  }

  useEffect(() => {
    console.log(visibleItems)
  }, [visibleItems])

  return (
    <div className='select-none flex flex-col items-center justify-start gap-8 w-full'>
      {
        list.map((item: any) => (
          <div
            key={item.id}
            className='w-2/3 bg-red-500 font-sans rounded-lg flex flex-col items-center justify-center gap-8 py-6 px-8'>
            <div className='w-full flex flex-row-reverse justify-between gap-8'>
              <p className='text-lg'>{item.name}</p>
              {
                item.item && (
                  <p
                    className='text-lg cursor-pointer px-3 py-2 bg-sky-600 rounded-lg'
                    onClick={() => handleToggleVisibility(item.id)}
                  >
                    تعداد: {item.item.length}
                  </p>
                )
              }
            </div>
            {
              item.item && visibleItems.includes(item.id) && (
                <div className={`w-full flex flex-col items-center justify-center gap-4 bg-green-500 rounded-lg px-8 py-4`}>
                  {
                    item.item.map((item: any, index: any) => (
                      <p key={index} className='text-sm'>{item}</p>
                    ))
                  }
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard

export function getServerSideProps(context: any) {
  const { req, res, query, params } = context

  const arrayList = [
    {
      id: 1,
      name: 'داشبورد',
    },
    {
      id: 2,
      name: 'دارایی ها',
      item: [
        'دارایی 1',
        'دارایی 2',
      ]
    },
    {
      id: 3,
      name: 'سفته ها',
    },
    {
      id: 4,
      name: 'قرارداد ها',
      item: [
        '1 قرارداد ها',
        '2 قرارداد ها',
      ]
    },
    {
      id: 5,
      name: 'درخواست ضمانت',
    },
    {
      id: 6,
      name: 'تاریخچه تراکنش ها',
    },
  ]

  return {
    props: {
      list: arrayList
    },
  }
}