import { Link } from "react-router-dom";

export default function ThingsHome() {
  return (
    <div>
      <div className="list-group">
        <Link
          to="/things/starShips"
          className="list-group-item list-group-item-action"
        >
          StarShips
        </Link>
        <Link
          to="/things/vehicles"
          className="list-group-item list-group-item-action"
        >
          Vehicles
        </Link>
        <Link
          to="/things/species"
          className="list-group-item list-group-item-action"
        >
          Species
        </Link>
        <Link
          to="/things/planets"
          className="list-group-item list-group-item-action"
        >
          Planets
        </Link>
      </div>
    </div>
  );
}
