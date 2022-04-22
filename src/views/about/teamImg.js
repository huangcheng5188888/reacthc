import React, { useState } from 'react'
import './index.scss'
import { Waypoint } from 'react-waypoint';

export default function TeamImg(props) {
    const [yanquiStyle, setYueqiuStyle] = useState(0)
    const [boardFadeInUp, setBoardFadeInUp] = useState('')

    return (<div className='mint-warp' ref={props.refs}>
        {/* <img className='mint-bg' src={require('../../assets/About_bg.png')} alt="" /> */}
        <div className='TeamImg-content'>
            {/* <img className="teadlim" src={require('../../assets/Team.png')} alt="" /> */}
            <div className='teadlim'>TEAM </div>
            <Waypoint onEnter={() => {
                setBoardFadeInUp('fadeInUp')
            }}>
                <div className={`${boardFadeInUp}`}>
                    <div className="img-box top" >
                        <img src={require("../../assets/组 10.png")} alt="" className="nft"
                            style={{
                                transform: `translate(${yanquiStyle}px,${yanquiStyle}px)`,
                                transition: 'all .5s linear'
                            }}
                        />
                        <img src={require("../../assets/组 10 拷贝.png")} alt="" className="nft"

                            style={{
                                transform: `translateY(${yanquiStyle}px)`,
                                transition: 'all .5s linear'
                            }}
                        />
                        <img src={require("../../assets/组 10 拷贝 2.png")} alt="" className="nft"

                            style={{
                                transform: `translate(${-yanquiStyle}px,${yanquiStyle}px)`,
                                transition: 'all .5s linear'
                            }} />
                    </div>
                    <div className="img-box" >
                        <img src={require("../../assets/组 10.png")} alt="" className="nft"
                            style={{
                                transform: `translate(${yanquiStyle}px,${-yanquiStyle}px)`,
                                transition: 'all .5s linear'
                            }}
                        />
                        <img src={require("../../assets/组 10.png")} alt="" className="nft"
                            style={{
                                transform: `translateY(${-yanquiStyle}px)`,
                                transition: 'all .5s linear'
                            }}
                        />
                        <img src={require("../../assets/组 10 拷贝.png")} alt="" className="nft" style={{
                            transform: `translateY(${-yanquiStyle}px)`,
                            transition: 'all .5s linear'
                        }} />
                        <img src={require("../../assets/组 10 拷贝 2.png")} alt="" className="nft" style={{
                            transform: `translate(${-yanquiStyle}px,${-yanquiStyle}px)`,
                            transition: 'all .5s linear'
                        }} />
                    </div>
                </div>
            </Waypoint>

        </div>

    </div>);
}