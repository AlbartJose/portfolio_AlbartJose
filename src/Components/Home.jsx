import "./Styles.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeMain">
      <div className="homeStart">
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/images/avatar.jpeg"
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div>
          <div>Hi,</div>
          <div>I am Albart Jose</div>
          <div>I am a Full Stack Web Developer</div>
          <div className="download">
            <Link to="/files/AlbartJose_Resume.pdf" target="_blank" download>
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="homeSkills"></div>
    </div>
  );
};
