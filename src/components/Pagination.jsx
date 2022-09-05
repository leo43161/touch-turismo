import Pagination from 'react-bootstrap/Pagination';

export default function PaginationTouch({ perPages, total, paginate, page, type }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / perPages); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination className={"pagination-" + type} size="lg">
            <Pagination.Item
                onClick={() => paginate(page - 1)}
                disabled={pageNumbers[0] === page}>
                Anterior
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
