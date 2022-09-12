import Pagination from 'react-bootstrap/Pagination';

export default function PaginationTouch({ perPages, total, paginate, type }) {
    /*  */
    const lastPage = Math.ceil(total / perPages);
    console.log(lastPage)
    console.log("lastPage")
    const page = 41;
    console.log(total);
    const delta = 2;
    const range = [];

    for (let i = Math.max(2, (page - delta)); i <= Math.min((lastPage - 1), (page + delta)); i += 1) {
        range.push(i);
    }

    if ((page - delta) > 2) {
        range.unshift('...');
    }

    if ((page + delta) < (lastPage - 1)) {
        range.push('...');
    }

    range.unshift(1);
    if (lastPage !== 1) range.push(lastPage);

    console.log(range);

    /*  */

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
