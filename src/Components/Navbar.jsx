import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  return (
    <div className="navMain">
      <div>
        <Link to="/">Albart Jose</Link>
      </div>
      <div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/about-me">About</Link>
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
        {/* <div className="download">
          <Link to="/files/AlbartJose_Resume.pdf" target="_blank" download>
            Resume
          </Link>
        </div> */}
      </div>
    </div>
  );
};
