"use client"

import React, { useEffect, useState } from 'react'
import { List } from 'react-virtualized';

const ReactVirtualized = () => {
    const [items, setItems] = useState<{
        id: number, name: string, family: string
    }[]>([])

    useEffect(() => {
        setItems(
            Array.from({ length: 100000 }, (_, index) => generateItem(index + 1))
        )
    }, [])

    const generateItem = (id: number) => ({
        id,
        name: `Name${id}`,
        family: `Family${id}`,
    });

    const rowRenderer = ({ index, isScrolling, key, style }: any) => {
        const item = items[index];
        return (
            <div key={key} style={style} className='flex flex-col items-center justify-center'>
                <p className={`mt-2 px-8 py-4 ${isScrolling ? 'text-red-500' : 'text-white'}`}>
                    {
                        isScrolling ? 'Loading...' : item.name
                    }
                </p>
                <span className="border-t border-gray-300 w-full mt-2" />
            </div>
        );
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-start gap-16'>
            <h1 className='text-4xl'>ReactVirtualized</h1>

            <List
                className='bg-pink-500'
                width={500}
                height={500}
                rowCount={items.length}
                rowHeight={100}
                rowRenderer={rowRenderer}
                onScroll={console.log}
            />
        </div>
    )
}

export default ReactVirtualized