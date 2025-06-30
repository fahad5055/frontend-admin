import React from "react";
import Inputfild from "./Input";

function Table({
  collums = [],
  data = [],
  Customerscollums = [],
  datOrdersscollumsa = [],
}) {
  return (
    <div className="shadow-sm p-3 rounded bg-light">
      <Inputfild class="shadow-sm w-25" type="test" placeholder="Search" />
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
            <div className="my-3 text-center fw-bold">
              <p>No Data Available</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
