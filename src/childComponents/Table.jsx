import React from "react";
import Inputfild from "./Input";
import "../../src/App.css";

function Table({
  collums = [],
  data = [],
  Customerscollums = [],
  datOrdersscollumsa = [],
}) {
  return (
    <div className="shadow-sm p-3 rounded bg-light">
      <div className="d-flex justify-content-end pb-1 mb-2">
        <Inputfild class="Search" type="test" placeholder="Search" />
      </div>
      <table class="table">
        <thead className="table-primary">
          <tr>
            {collums.map((col, i) => {
              return <th key={i}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            <>
              {data.map((e, i) => (
                <tr key={e.i}>
                  <td>{i + 1}</td>
                  <td>{e.CategoryName}</td>
                  <td>{e.CategorySlug}</td>
                  <td>{e.action}</td>
                </tr>
              ))}{" "}
            </>
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
