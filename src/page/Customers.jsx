import React, { useState } from "react";
import PageTitle from "../childComponents/PageTitle";
import Button from "../childComponents/button";
import CustomersTable from "../components/Table/Customers";

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
  const col = [
    {
      header: "SL#",
      accesor: "index",
    },
    {
      header: "ID",
      accesor: "ID",
    },
    {
      header: "Order",
      accesor: "Order",
    },
    {
      header: "Customer Name",
      accesor: "CustomerName",
    },
    {
      header: "Customer Mobile Number",
      accesor: "CustomerMobileNumber",
    },
    {
      header: "Order Call",
      accesor: "OrderCall",
    },
    {
      header: "Order Date",
      accesor: "OrderDate",
    },
    {
      header: "Delivary Date & Time",
      accesor: "DelivaryDate&Time",
    },
    {
      header: "Orders Status",
      accesor: "OrdersStatus",
    },
    {
      header: "Payment Status",
      accesor: "PaymentStatus",
    },
    {
      header: "Payment Mode",
      accesor: "PaymentMode",
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
            {" "}
            <PageTitle title="Customer Data" />
            <CustomersTable collums={collums} />{" "}
          </>
        ) : (
          <>
            <PageTitle title="Orders data" />
            <CustomersTable col={col} />
          </>
        )}
      </div>
    </div>
  );
}

export default Customers;
