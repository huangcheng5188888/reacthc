import React, { useEffect, useState } from 'react'
import './index.scss'
import { getTime } from '../../utils/index.js'
import { Waypoint } from 'react-waypoint';
let isTime = null

export default function Mint(props) {
    // getTime
    const [boardFadeInUp, setBoardFadeInUp] = useState('')
    const [boardFadeInUp1, setBoardFadeInUp1] = useState('')
    const [time, setTime] = useState({})
    useEffect(() => {
        setTime(getTime("2023-6-25 18:00:00"))
        isTime = setInterval(() => {
            setTime(getTime("2022-6-25 18:00:00"))
        }, 1000);
        return () => {
            clearInterval(isTime);
        }
    }, [])


    return (<div className='mint-warp' ref={props.refs}>
        <div className='board-text'>
            <div className='distribution'>
                <div>
                    <p className='p1'>
                        FAIR DISTRIBUTION
                    </p>

                </div>
                <div className='flex'>

                    <p className='p2'>
                        There are no bonding curves here. Buying a STEAM Ape costs 0.08 ETH. There are no price tiers;  same price for everyone.
                    </p>
                    <p className='p3'>
                        Note: 100 apes are being withheld from the sale. These will be used for giveaways, puzzle rewards.
                    </p>
                </div>

            </div>
            <div className='discord'>
                <div className='time-1'>
                    <p className='p1'>PRESALE:</p>
                    <p className='p1'>17 MAY 2022 AT 10PM GMT+8</p>
                </div>
                <div className='time-2'>
                    <div className="time-box-img">
                        <div className="item">
                            <div className="img-position">
                                <img src={require("../../assets/time-box.png")} alt="" />
                                <div className="text">
                                    {time.days}
                                </div>
                            </div>
                            <div>Days</div>
                        </div>

                        <div className="item">
                            <div className="img-position">
                                <img src={require("../../assets/time-box.png")} alt="" />
                                <div className="text">
                                    {time.hours}
                                </div>
                            </div>
                            <div>Hours</div>
                        </div>
                        <div className="item">
                            <div className="img-position">
                                <img src={require("../../assets/time-box.png")} alt="" />
                                <div className="text">   {time.mins}</div>
                            </div>
                            <div>Minutes</div>
                        </div>
                        <div className="item">
                            <div className="img-position">
                                <img src={require("../../assets/time-box.png")} alt="" />
                                <div className="text">   {time.Scons}</div>
                            </div>
                            <div>Seconds</div>
                        </div>
                    </div>
                </div>
                <div className='time-but'>
                    <img src={require("../../assets/wenzia.png")} alt="" />
                </div>
            </div>
            <Waypoint onEnter={(a) => {
                if (boardFadeInUp === '') {
                    setBoardFadeInUp(true)
                } else {
                    setBoardFadeInUp('fadeInUp')
                }
            }}>
                <div className={`distribution board  animated ${boardFadeInUp}`} >
                    {/* {boardFadeInUp } */}
                    <p className='p1' style={{ marginBottom: '.32rem' }}>
                        WELCOME ON BOARD
                    </p>
                    <p className='p2'>
                        When you buy a Steam Ape, you’re not simply buying an avatar . You are gaining membership access to a club whose benefits and offerings will increase over time. Your Steam Ape can serve as your digital identity, and open digital doors for you.
                    </p>
                </div>
            </Waypoint>
            <Waypoint onEnter={(a) => {
                if (boardFadeInUp === '') {
                    setBoardFadeInUp1(true)
                } else {
                    setBoardFadeInUp1('fadeInUp')
                }
            }}>
                <div className={`nft-img  animated ${boardFadeInUp1}`} >
                    <div className='item'>
                        <img className='nft-img' src={require('../../assets/nft-img.png')} alt="" />
                        <p>
                            Metaverse
                        </p>
                        <p>ticket</p>
                    </div>
                    <div className='item'>
                        <img className='nft-img' src={require('../../assets/nft-img.png')} alt="" />
                        <p>
                            Game of
                        </p>
                        <p>
                            specters
                        </p>
                    </div>
                    <div className='item'>
                        <img className='nft-img' src={require('../../assets/nft-img.png')} alt="" />
                        <p>
                            Online game
                        </p>
                        <p>
                            elements
                        </p>
                    </div>
                    <div className='item'>
                        <img className='nft-img' src={require('../../assets/nft-img.png')} alt="" />
                        <p>

                            100000 Steam ape


                        </p>
                        <p>


                            tokens



                        </p>
                    </div>
                    <div className='item'>
                        <img className='nft-img' src={require('../../assets/nft-img.png')} alt="" />
                        <p>
                            Derivatives and
                        </p>
                        <p>  peripheral products</p>
                    </div>
                </div>
            </Waypoint>

        </div>
        <img className="border" src={require('../../assets/组 70.png')} alt="" />
    </div>);
}