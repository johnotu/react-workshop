import { Link } from "react-router-dom";
// import Form from "../components/Form";

export default function Home() {
  return (
    <div className="container">
      <h1 className="display-1 mb-3">React Workshop</h1>
      <hr />
      <div className="mb-3">
        <Link to="/people" className="display-4">
          StarWars People
        </Link>
      </div>
      <hr />
      <div className="mb-3">
        <Link to="/things" className="display-4">
          StarWars Things
        </Link>
      </div>
      {/* <div className="mt-3">
        <h3 className="display-4">Sample form</h3>
        <Form />
      </div> */}
    </div>
  );
}
