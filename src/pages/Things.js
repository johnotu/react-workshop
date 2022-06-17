import { Outlet } from "react-router-dom";

export default function Things() {
  return (
    <div className="container">
      <h3 className="display-3">Things</h3>
      <p className="lead">Find every star wars thing</p>
      <hr />
      <Outlet />
    </div>
  );
}
