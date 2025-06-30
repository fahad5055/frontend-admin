import React, { useState } from "react";
import PageTitle from "../ChildComponents/PageTitle";
import Button from "../ChildComponents/Button";
import Table from "../ChildComponents/Table";

function Customers() {
  const collums = [
    {
      header: "Customer Name	",
      accesor: "CustomerName	",
    },
    {
      header: "Email",
      accesor: "Email",
    },
    {
      header: "Mobile	",
      accesor: "Mobile	",
    },
    {
      header: "Actions",
      accesor: "Actions",
    },
  ];

  const [data, setData] = useState(true);

  return (
    <div className="container-fluid">
      <div className="col-5 mb-3 d-flex ">
        <Button
          title="Customers"
          className="me-3 btn-sm active"
          onClick={(e) => setData(true)}
        />

        <Button
          title="Orders"
          className="active btn-sm"
          onClick={(e) => setData(false)}
        />
      </div>

      <div>
        {data ? (
          <>
            <PageTitle title="Customer Data" />
            <Table collums={collums} />
          </>
        ) : (
          <>
            <PageTitle title="Orders data" />
            <Table collums={collums} />
          </>
        )}
      </div>
    </div>
  );
}

export default Customers;
