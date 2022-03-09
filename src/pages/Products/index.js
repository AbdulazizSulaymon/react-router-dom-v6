import React from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import DashboardTemplate from "../../components/DashboardTemplate";
import ImageProduct from "../../components/ImageProduct";
import getProducts from "../../data/products";

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location.search);

  return (
    <>
      <h1>Products</h1>
      <input
        className="form-control mb-4"
        placeholder="filter"
        value={searchParams.get("filter")}
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) setSearchParams({ filter: e.target.value });
          else setSearchParams({});
        }}
      />
      <table className="table">
        <thead></thead>
        <tbody>
          {products
            .filter((item) => {
              const filter = searchParams.get("filter");
              return !filter || item.title.toLowerCase().includes(filter);
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.price} $</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`${item.id}${location.search}`}
                  >
                    show
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Routes>
        <Route index element={<h3>Please Select Product for see image!</h3>} />
        <Route path=":id" element={<ImageProduct />} />
      </Routes>
    </>
  );
}
