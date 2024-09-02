"use client"

import { delay } from '@/utils/Helper';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

type Item = {
    id: number,
    name: string,
    family: string,
    avatar: string
}

const fetchItems = async (page: number): Promise<Item[]> => {
    const response = await fetch(`https://arashaltafi.ir/test_paging/test_paging.php?page_number=${page}&page_size=${10}`);
    const data = await response.json();
    return data;
};

const Pagination = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1)
    const loaderRef = useRef<HTMLDivElement>(null);

    const loadMoreItems = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        await delay(1000)

        try {
            const newItems = await fetchItems(page);
            console.log(newItems)
            console.log(newItems.length)
            if (newItems.length > 0) {
                setItems((prevItems) => [...prevItems, ...newItems]);
                setPage((prevPage) => prevPage + 1);
                setLoading(false);
            } else {
                setHasMore(false);
                setLoading(false);
            }
        } catch (error) {
            setHasMore(false);
        }
    };

    // useEffect(() => {
    //     loadMoreItems();
    // }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasMore && !loading) {
                    loadMoreItems();
                }
            },
            { rootMargin: '100px' }
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) {
            observer.observe(currentLoader);
        }

        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
        };
    }, [hasMore, loading, page]);

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <p>id: {item.id}</p>
                        <p>name: {item.name}</p>
                        <p>family: {item.family}</p>
                        <Image
                            src={item.avatar}
                            width={150}
                            height={150}
                            alt={item.name}
                        />
                    </li>
                ))}
            </ul>
            <div ref={loaderRef}>
                {loading && <p>Loading...</p>}
                {!hasMore && !loading && <p>No more items</p>}
            </div>
        </div>
    );
}

export default Pagination