import usePagination from "@/hooks/usePagination"

interface PaginationProps {
    items: any,
    itemsPerPage: number
}
export default function Pagination({ items, itemsPerPage }: PaginationProps) {
    const { currentPage, totalPages, nextPage, prevPage } = usePagination({ items, itemsPerPage });

    return <div className="pagination">
        <button disabled={currentPage === 1} onClick={prevPage}>
            Previous
        </button>
        <span>
            Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={nextPage}>
            Next
        </button>
    </div>
}