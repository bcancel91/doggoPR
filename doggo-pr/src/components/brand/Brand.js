import React from "react";
import BrandIMG3 from "./doggoInsta1.jpeg"
import "./Brand.css";

function BrandDiv() {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="font">DOGGOPR</h1>
                </div>
            </div>
            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
                    {/* <div>
                   
                  <img src={BrandIMG3} alt="profileImage" className="m-4 firstIMG" height="500px" width="370px"></img>
                  </div> */}
                    <div class="photo">
                        <img src={BrandIMG3} className="hoverImg" width="410px" height="350px"></img>
                        <div className="note">hover to develop</div>
                    </div>



                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="">
                        <p className="brandText">
                            Doggo a brand that that finally represents the best life of your pup.
                            Dont denine your doggos the style they deserve.
                            Simple. Just select a Style you like selct a size we ship.
                            </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BrandDiv;