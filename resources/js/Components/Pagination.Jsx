import React from 'react';

const Pagination = ({ currentPage, totalPages, items }) => {
    if (totalPages <= 1) {
        return null; // No need to show pagination if there's only one page
    }

    const handleClick = (page) => {
        window.location.href = `${window.location.pathname}?page=${page}`;
    };

    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
                        aria-disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1} className="page-item">
                        <button
                            className={`page-link ${currentPage === i + 1 ? 'bg-primary text-white' : ''}`}
                            onClick={() => handleClick(i + 1)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => currentPage < totalPages && handleClick(currentPage + 1)}
                        aria-disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
