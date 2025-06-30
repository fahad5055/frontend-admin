import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";

function header() {
  return (
    <div>
      <div className="row d-flex">
        <div className="col-2">
          <h1>LOGO</h1>
        </div>
        <div className="col-8">
          <nav class="navbar navbar-expand-lg m-auto">
            <ul class="navbar-nav m-auto fw-bold">
              <li class="nav-item">
                <Link class="nav-link fw-bold" to="/">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold" href="/category">
                  Category
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold" href="/Products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link fw-bold" href="/customers">
                  Customers & Orders
                </Link>
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
