import React from "react";
import { stackList } from "../../data/ProjectData";
import Avatar from "@mui/material/Avatar";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image>
            <Avatar
              alt="Remy Sharp"
              src="/images/avatar.jpeg"
              sx={{ width: 150, height: 150 }}
            />
          </Image>
          <div className="AboutBio">
            Hello! My name is <strong>Albart Jose</strong> and I enjoy
            coding and solving problems. I joined Masai School to develop my skills in Full Stack Development. I have created various end to end website clones with <strong>MERN stack</strong>
          </div>
          <div className="AboutBio tagline2">
            The <strong>tech stacks</strong> I use are
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
