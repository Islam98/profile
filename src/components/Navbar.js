import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AiFillGithub, AiFillFileText, AiFillLinkedin } from 'react-icons/ai';
import styled from 'styled-components';


/* create a rounded bg on the icon & on hover enlarge the whole container */
const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 1.125rem;
    padding: 0.5px;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    &:hover {
        //background-color: rgba(255,250,250, 0.3);
        background-color: rgba(0,128,128, 0.3);
        transform: scale(1.2);
        cursor: pointer;
  }`

  const SocialIconsDiv = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            {/* <a className="navbar-brand" href="#">Islam Omar</a> */}   {/* name on the left (not needed) */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#778899'}}></FontAwesomeIcon>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto"> {/*or ms-auto to go on right*/}
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                {/*<li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                </li>*/}
                <li className="nav-item active">
                    <a className="nav-link" href="#Exp">Experience</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#Skills">Skills</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#Activities">Activities</a>
                </li>
                {/*<li className="nav-item active">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>*/}
                </ul>

                <SocialIconsDiv className="SocialIcons">
                    <SocialIcons href="https://github.com/Islam98"><AiFillGithub className="socialIconchangeColor" color="white" size="1.5rem"></AiFillGithub></SocialIcons> {/* choosed the color of the AiFill icon to be white, because the default on hover is switching to blue then switching to the color we set in the css for the socialIconchangeColor class */}
                    <SocialIcons href="https://www.linkedin.com/in/islam98"><AiFillLinkedin className="socialIconchangeColor" color="white" size="1.5rem"></AiFillLinkedin></SocialIcons>
                    <SocialIcons href="https://drive.google.com/file/d/1O3rp0JQD18e4XS7ZQjEuEYdY4up38ly3/view?usp=sharing" target="_blank"><AiFillFileText className="socialIconchangeColor" color="white" size="1.5rem"></AiFillFileText></SocialIcons>
                    
                </SocialIconsDiv>
            </div>
        </div>
</nav>
    )
}

export default Navbar
