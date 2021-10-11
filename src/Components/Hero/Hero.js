import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {

  return (
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Albart Jose</h1>
            <h5>I'm a Full Stack Web Developer</h5>
            <p>
              I come from Kochi, Kerala. I have an
              unwavering passion and energy for web development and am always open
              to making new friends.
            </p>
            <p style={{ fontWeight: "500" }}>Contact me at albartbtme@gmail.com</p>
            <div className="download">
              <Link to="/files/AlbartJose_Resume.pdf" className='btn btn--outline' target="_blank" download>
                Resume
              </Link>
            </div>
            {/* <div className="download">
              <a href={`mailto:albartbtme@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  Email me
                </span>
              </a>
            </div> */}

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="Remy Sharp"
              src="/images/avatar.jpeg"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </div>
  );
}

export default Hero;
