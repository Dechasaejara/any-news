import { useState, useMemo } from 'react';

interface PaginationProps<T> {
    items: T[];
    itemsPerPage: number;
}

const usePagination = <T>({ items, itemsPerPage }: PaginationProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(items.length / itemsPerPage);
    }, [items, itemsPerPage]);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }, [items, currentPage, itemsPerPage]);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return {
        currentPage,
        totalPages,
        currentItems,
        nextPage,
        prevPage,
    };
};

export default usePagination;
