import React, { useState, useMemo, useEffect } from "react";
import Inputfild from "./Input";
import TableFormTitle from "./TableFormTitle";
import "../../src/App.css";

function Table({ collums = [], data = [], itemsPerPage = 5 }) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // useMemo to filter data based on query, collums, and data changes
  const filteredData = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return data.filter((item) =>
      collums.some((col) => {
        const value = item[col.accessor];
        return value?.toString().toLowerCase().includes(lowerQuery);
      })
    );
  }, [query, data, collums]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <div className="shadow-sm p-1 rounded bg-light">
      <TableFormTitle title="List of items" />
      <div className="d-flex justify-content-end pb-1 mb-2">
        <Inputfild
          class="Search"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <table className="table w-100" style={{ tableLayout: "fixed" }}>
        <thead className="table-primary">
          <tr>
            {collums.map((col, i) => (
              <th key={i} className="text-center">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {collums.map((col, colIndex) => (
                  <td key={colIndex} className="text-center">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={collums.length} className="text-center fw-bold py-3">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-end align-items-center gap-3 mt-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="fw-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="btn btn-primary btn-sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
