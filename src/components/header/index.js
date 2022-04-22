


import React, { useState } from "react";
// import TextContent from "../../content";
import './index.scss'
import { nav } from '../../data/index'
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [mem, setMen] = useState(false)

    const navigate = useNavigate()

    return (<>
        <div className="header-warp" >
            {/* <i class="iconfont icon-xialajiantouxiao"></i> */}
            {nav.map((item, index) => {
                return <div key={index} onClick={() => {
                    navigate(item.url)
                }}>
                    {item.imgUrl ? <img className={item.className} src={item.imgUrl} alt="" /> : <div onMouseOut={() => {
                        item.icon && setMen(false)
                    }} onMouseOver={() => {
                        item.icon && setMen(true)
                    }} className="nab">
                        {item.text}   {item.icon && <i className={`iconfont ${!mem ? item.icon : item.icons}`} ></i>}


                        {item.icon && <div className="nab-chied" style={
                            {
                                height: mem ? '1.7rem' : '0'
                            }
                        }>
                            <div className="bga"></div>
                            <div className="bgc">
                                <div>TOKEN CLAIM</div>
                                <div>STEAM MECH APE</div>
                            </div>
                        </div>}
                    </div>}
                </div>
            })}
        </div>
    </>);
}
