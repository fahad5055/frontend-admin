import React from "react";
import Inputfild from "../../childComponents/input";

function CustomersTable({ collums = [], col = [], data = [] }) {
  return (
    <div className="shadow-sm p-3 rounded">
      <div className="row">
        <div className="col-6 mt-4">
          <p>Total Records: 0</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Inputfild placeholder="Search" />
        </div>
      </div>
      <table class="table mt-3">
        <thead className="table-primary">
          <tr>
            {collums.map((col, i) => {
              return <th key={i}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <thead className="table-primary">
          <tr>
            {col.map((col, i) => {
              return <th key={i}>{col.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            <>
              {data.map((e, i) => (
                <tr key={e.i}>
                  <td>{e.CustomerName}</td>
                  <td>{e.Email}</td>
                  <td>{e.Mobile}</td>
                  <td>{e.Actions}</td>
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

export default CustomersTable;
