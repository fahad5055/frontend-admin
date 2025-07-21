import React from "react";
import Inputfild from "./Input";
import "../../src/App.css";

function Table({ collums = [], data = [] }) {
  return (
    <div className="shadow-sm p-3 rounded bg-light">
      <div className="d-flex justify-content-end pb-1 mb-2">
        <Inputfild class="Search" type="text" placeholder="Search" />
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
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
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
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
