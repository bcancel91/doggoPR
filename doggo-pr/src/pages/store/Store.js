import React from "react";
import Storeitem from "./storeitem";
import Coller1 from "./coller1.jpeg"



function Store() {

    return (
        <div className="conatiner-fluid mt-4">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 1"
                        info="blah blah blh and blah">
                        <div className="row">
                            <div className="col-6">
                                <img src={Coller1} height="300px" width="375px"></img>

                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </Storeitem>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 2"
                        info="blah blah blh and blah">
                        <div className="row">
                            <div className="col-6">

                                <img src={Coller1} height="300px" width="375px"></img>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </Storeitem>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 3"
                        info="blah blah blh and blah">
                        <div className="row">
                            <div className="col-6">

                                <img src={Coller1} height="300px" width="375px"></img>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </Storeitem>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 4"
                        info="blah blah blh and blah">
                        <img src={Coller1} height="300px" width="375px"></img>

                    </Storeitem>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 5"
                        info="blah blah blh and blah">
                        <img src={Coller1} height="300px" width="375px"></img>

                    </Storeitem>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center mb-4">
                    <Storeitem
                        title="Doggo style 6"
                        info="blah blah blh and blah">
                        <img src={Coller1} height="300px" width="375px"></img>

                    </Storeitem>
                </div>
            </div>
        </div>

    )
};

export default Store;