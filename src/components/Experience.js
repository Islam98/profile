import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import GbAch from './../Assets/Gameball_Achievement.jpg';
import MLCourse from './../Assets/Machine_Learning.jpg';
import DECourse from './../Assets/Data_Engineering.jpg';
import UnityCourse from './../Assets/Left2Dead_Collage.jpg';
import SEcourse from './../Assets/Website.JPG';
import AndroidStudiocourse from './../Assets/Android.JPG';

const Experience = () => {
    return (
        <div id="Exp" class="bg-dark mt-5 vh-150 overflow-hidden">
            <div class="justify-content-center align-items-center d-flex text-light">
                <h1 style={{color:'#40E0D0'}}> Experience & Projects </h1>
            </div>
            <Tabs className="tab" defaultActiveKey="internships" transition={true}>
                <Tab tabClassName="tab1" eventKey="internships" title="Internships">
                    <div>
                        <div class="row row-cols-auto row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card border-info w-100 h-100">
                                    <img src={GbAch} class="card-img-top" alt="Gameball Achievement"/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <h5 class="card-title">Data Science Internship - Gameball</h5>
                                        <p class="card-text">Applied multiple data pre-processing (Cleaning, Column Encoding, etc..) and used Kmeans approach to group similar players, applied exploratory analysis and visualizations, and recommended products to players of the same cluster</p>
                                        <p class="lead text-muted">AUGUST-SEPTEMBER 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab tabClassName="tab2" eventKey="projects" title="Projects">
                    <div>
                        <div class="row row-cols-auto row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card border-info h-100">
                                    <img src={MLCourse} class="card-img-top" alt={"ML"}/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <a href="https://github.com/Islam98/Portfolio/tree/master/Machine%20Learning%20Course" target="_blank"><h5 class="card-title">Machine Learning</h5></a>
                                        <p class="card-text">Implemented and applied different machine learning supervised/ unsupervised algorithms (ex.: Fisher’s Linear Discriminant, Naïve Bayes, and Fuzzy C-means (FCM), etc..) clustering approaches for classifying image data of hand-written numbers</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-info h-100">
                                    <img src={DECourse} class="card-img-top" /*height="225"*/ alt="DE"/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <a href="https://github.com/Islam98/Portfolio/tree/master/Data%20Engineering%20Course" target="_blank"><h5 class="card-title">Data Engineering</h5></a>
                                        <p class="card-text">Applied ETL operation, by acquiring three datasets of life expectancy&world happiness countries report&countries data from Kaggle, integrated them together and applied cleaning processes. Created visualizations, run exploratory and statistical analysis, preprocessed the
                                                    data as needed, and communicate the results. Used Airflow for the pipeline process</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-info h-100">
                                    <img src={UnityCourse} class="card-img-top" height="45%" alt="Game Collage"/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <h5 class="card-title">Game Development</h5>
                                        <p class="card-text">Created a modified version of the “Left 4 Dead” game. Used Unity-C# to create the project. Project included three levels, different weapons and items to pickup and use (inventory), UnityAI to target player, others.. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-info h-100">
                                    <img src={AndroidStudiocourse} class="card-img-top" height="300" alt="Android app"/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <a href="https://github.com/Islam98/Portfolio/tree/master/GUC-Library" target="_blank"> <h5 class="card-title">Android Development</h5></a>
                                        <p class="card-text">Android application of a simple e-commerce for library items. Used Mongodb/Android Studio/NodeJS</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-info h-100">
                                    <img src={SEcourse} class="card-img-top" height="300" alt="Website"/>
                                    <div class="card-body bg-info bg-opacity-10">
                                        <a href="https://github.com/Islam98/Portfolio/tree/master/Website1" target="_blank"><h5 class="card-title">Web Development</h5></a>
                                        <p class="card-text">Implemented CRUD functionalities in back-end and provided automated test functions, and front-end view of a web app. Project was of MERN stack and Agile software development approach</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Experience
