import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">English words</Link>
      </h1>

      <div className="menu">
        
        <a href="#x" className="link">
          Add a word
        </a>
        <a href="#x" className="link">
          Add day
        </a>
      </div>
    </div>
  );
}
