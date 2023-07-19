import React from 'react'
import { SiPython, SiHaskell, SiJavascript, SiMongodb, SiReact, SiGithub, SiOpengl,
    SiAndroidstudio, SiPostman, SiVisualstudio, SiUnity } from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { DiProlog, DiGit } from 'react-icons/di';
import { GiDatabase } from 'react-icons/gi';
import { Icon } from '@iconify/react';
import cshicon from './../Assets/C#_icon.png';

const Skills = () => {
    return (
        <div id="Skills" class="mt-5 vh-200">
            <div class="justify-content-center align-items-center d-flex text-light">
                <h1 style={{color:'#20B2AA'}}>Skills</h1>
            </div>
            <div class="container bg-white bg-opacity-25 mt-5 p-3">
                <div class="row g-3">
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiPython size="2em"/> </div> <span>Python</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <FaJava size="2em"/> </div> <span>Java</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <img color="black" src={cshicon} height="32"/> </div> <span>C#</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiJavascript size="2em"/> </div> <span>JavaScript</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <GiDatabase size="2em"/> </div> <span>SQL</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiHaskell size="2em"/> </div> <span>Haskell</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <DiProlog size="2em"/> </div> <span>Prolog</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiMongodb size="2em"/> </div> <span>Mongodb</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiReact size="2em"/> </div> <span>ReactJS</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <FaNodeJs size="2em"/> </div> <span>NodeJS</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <DiGit size="2em"/> </div> <span>Git</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiGithub size="2em"/> </div> <span>GitHub</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiUnity size="2em"/> </div> <span>Unity</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiOpengl size="2em"/> </div> <span>OpenGL</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiAndroidstudio size="2em"/> </div> <span>Android Studio</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiPostman size="2em"/> </div> <span>Postman</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <SiVisualstudio size="2em"/> </div> <span>Visual Studio</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card text-center">
                            <div class="image"> <Icon icon="file-icons:matlab" height="2em"/> </div> <span>MATLAB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
