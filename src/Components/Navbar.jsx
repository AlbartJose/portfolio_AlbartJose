import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  return (
    <div className="navMain">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/about-me">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <a
            href="https://albartjose.hashnode.dev/"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
};
