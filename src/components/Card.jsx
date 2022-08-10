import React from "react";
import { useState } from "react";
import Pin from "./Pin";
import visa from "../assets/visaLogo.png";
import chip from "../assets/imgbin.png"


const Card = () => {
    const [otp, setOtp] = useState("");
    return (
        <div>
            <Pin length={4} setOtp={setOtp} />

            <div className="card">
                <div className="top">
                    <div>
                        <h2>React Bank</h2>
                    </div>
                    <div>
                        <img src={visa} alt="" />
                    </div>
                </div>
                <div className="center">
                    <img src={chip} alt="" />
                </div>
                <div className="bottom">
                    <p>Masai School</p>
                    <p className="no">{otp}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
