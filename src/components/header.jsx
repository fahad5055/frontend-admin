import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { logout } from "../store/action/userActions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandlar = (e) => {
    console.log("Logging out...");
    dispatch(logout());
    // toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <div>
      <div className="row d-flex shadow">
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
                <Link class="nav-link fw-bold" to="/category">
                  Category
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold" to="/Products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link fw-bold" to="/customers">
                  Customers & Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-2  d-flex justify-content-center align-items-center">
          <button
            className="btn btn-success "
            onClick={(e) => logoutHandlar(e)}
          >
            <FaPowerOff />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
