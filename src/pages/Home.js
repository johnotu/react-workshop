import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="display-1 mb-3">React Workshop</h1>
      <hr />
      <div className="">
        <Link to="/people" className="display-4">
          StarWars People
        </Link>
      </div>
      <hr />
    </div>
  );
}
