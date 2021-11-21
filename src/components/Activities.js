import React from 'react'
import caretechimg from "./../Assets/CareTech'19 _Bdaya'19.png";
import tazkartiimg from "./../Assets/Tazkarti_Team.jpg";

const Activities = () => {
    return (
        <div id="Activities" class="bg-dark mt-5 vh-75">
            <div class="justify-content-center align-items-center d-flex text-light">
            <h1 style={{color:'#40E0D0'}}>Social & Student Activities</h1>
            </div>
            <div>
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="justify-content-center">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-interval="200">
                                <img height="500" src={tazkartiimg} class="d-block w-100" style={{filter:'brightness(30%)'}}/>
                                <div class="carousel-caption text-light">
                                    <h1>Tazkarti AFCON Egypt'19</h1>
                                    <p>Joined Tazkarti for gate access control during the Africa Cup Of Nations in Egypt</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-interval="200">
                                <img height="500" src={caretechimg} class="d-block w-100" style={{filter:'brightness(30%)'}}/>
                                <div class="carousel-caption text-light d-md-block">
                                    <h1>Introduction to Computer Science Teacher</h1>
                                    <p>Taught teenagers programming concepts and skills using Scratch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /* slider controllers */ }
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Activities
