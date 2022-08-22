import Pagination from 'react-bootstrap/Pagination';

export default function PaginationTouch({ perPages, total, paginate, page }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / perPages); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination size="lg">
        <Pagination.Item
                onClick={() => paginate(page - 1)}
                disabled={pageNumbers[0] === page}>
                    Atras
                </Pagination.Item>
            {pageNumbers.map(number => (
                <Pagination.Item onClick={() => paginate(number)} key={number} active={number === page}>
                    {number}
                </Pagination.Item>
            ))}
            <Pagination.Item
                onClick={() => paginate(page + 1)}
                disabled={pageNumbers.length === page}>
                    Siguiente
                </Pagination.Item>
        </Pagination>
    )
}
