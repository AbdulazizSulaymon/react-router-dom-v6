import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from "./components/DashboardTemplate";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

const LoginContext = createContext({ isLogin: false, setLogin: () => {} });

function App() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <Router>
      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          {isLogin && (
            <Route path="/dashboard" element={<DashboardTemplate />}>
              <Route path="home" element={<Dashboard />} />
              <Route path="products/*" element={<Products />} />
            </Route>
          )}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginContext.Provider>
    </Router>
  );
}
export { LoginContext };
export default App;
