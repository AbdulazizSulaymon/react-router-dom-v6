import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";
import DashboardTemplateWrapper from "./DashboardTemplateWrapper";

const links = [
  { to: "home", title: "Dashboard" },
  { to: "products", title: "Products" },
];

export default function DashboardTemplate() {
  const navigate = useNavigate();
  const { isLogin, setLogin } = useContext(LoginContext);

  return (
    <DashboardTemplateWrapper>
      <aside className="p-3 shadow">
        <h2>Menu</h2>

        <ListGroup>
          {links.map((item) => (
            <ListGroup.Item>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                // style={({ isActive }) =>
                //   isActive ? { backgroundColor: "blue" } : {}
                // }
              >
                {item.title}
              </NavLink>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </aside>

      <div className="rightside">
        <header className="p-3 shadow d-flex align-items-center justify-content-between">
          <p className="m-0">logo</p>
          <div>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>{" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                setLogin(false);
                navigate("/");
              }}
            >
              Log out
            </button>
          </div>
        </header>

        <main className="p-3">
          <Outlet />
        </main>
      </div>
    </DashboardTemplateWrapper>
  );
}
