import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import CreateUser from "../pages/CreateUser";
import ReadUser from "../pages/ReadUser";
import UpdateUser from "../pages/UpdateUser";
import SingleUser from "../pages/SingleUser";

const Routing = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Header />
      <Routes>
        <Route path="" element={<CreateUser />} />
        <Route path="view" element={<ReadUser />} />
        <Route path="view/single/:id" element={<SingleUser />} />
        <Route path="view/single/:id/edit" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
