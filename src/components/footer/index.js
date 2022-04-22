


import React, { useState } from "react";
import './index.scss'
export default function Footer() {
    const [value, setValue] = useState()

    return (<>
        <div className="footer-warp" >

            <img className="border" src={require('../../assets/组 70.png')} alt="" />
            <img className="logo" src={require('../../assets/蒙版组 1.png')} alt="" />
            <div className="img-box">
                <div className="img-fo">
                    <img src={require('../../assets/组 14.png')} alt="" />
                    <img src={require('../../assets/组 15.png')} alt="" />
                    <img src={require('../../assets/组 16.png')} alt="" />
                </div>
                <p className="steamape">

                    ©STEAMAPE

                </p>
                <p >
                    STEAMAPES Terms&Conditions
                </p>
            </div>
            <div className="input-box">
                <p>
                    GET ON THE LIST
                </p>
                <div className="textinput">
                    <input type="text" placeholder='Please enter your email address' value={value} onChange={(e) => {

                        setValue(e.target.value)
                    }} />
                    <div className="imginput">    <img src={require('../../assets/路径 10.png')} alt="" /></div>
                </div>
            </div>
        </div>
    </>);
}
