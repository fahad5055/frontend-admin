import React from "react";
import { FaPowerOff } from "react-icons/fa6";

function header() {
  return (
    <div>
      <div className="row d-flex">
        <div className="col-2"></div>
        <div className="col-8">
          <nav class="navbar navbar-expand-lg m-auto">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a class="nav-link text-danger" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger" href="/Products">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger" href="/category">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger" href="/customers">
                  Customers & Orders
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-2  d-flex justify-content-center align-items-center">
          <button className="btn btn-success ">
            <FaPowerOff />
          </button>
        </div>
      </div>
    </div>
  );
}

export default header;
