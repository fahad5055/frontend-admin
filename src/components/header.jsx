import "../App.css";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// image
// import logo from "../../public/Image/logo.png";

// action
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
      <div className="container-fluid shadow-sm bg-white py-2 d-flex align-items-center">
        <div className="col-2">
          <div className="d-flex align-items-center">
            <img src="/Image/logo.png" alt="Logo" className="logo" />
            <h4 className="p-2 mt-1">Admin</h4>
          </div>
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
        <div className="col-2  d-flex justify-content-end ">
          <button
            className="p-2 button d-flex align-items-center gap-1 shadow me-5"
            onClick={logoutHandlar}
          >
            Logout
            <IoMdExit />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
