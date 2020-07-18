import React from "react";
import "./Parallax.css";
import DoggoTila1 from "./doggoTila1.JPG";
import DoggoTila2 from "./doggoTila2.JPG";
import DoggoColler1 from "./doggoColler1.jpg";
import DoggoColler2 from "./doggoColler2.jpg";
import DoggoColler3 from "./doggoColler3.jpg";



function Home() {

    return (
        <div>

            <div className="parallax bigBorder"></div>

            <div className="row paraText">
                <div className="col-6 d-flex justify-content-center">
                    <img src={DoggoTila1} height="500px" width="500px" className="tila"></img>
                </div>

                <div className="col-6 p-3 d-flex align-items-center">
                    <div>
                        <h1>Tila rocks our gear on a daily</h1>
 Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
                    <div>
                        <img src={DoggoTila2} height="300px" width="300px" className="tila mt-3"></img>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-4 d-flex justify-content-center">
                    <img src={DoggoColler1} height="350px" width="350px" className="doggoColler"></img>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <img src={DoggoColler2} height="350px" width="350px" className="doggoColler"></img>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <img src={DoggoColler3} height="350px" width="350px" className="doggoColler"></img>
                </div>


            </div>

            <div className="parallax bigBorder"> </div>
        </div>



    )
}

export default Home;