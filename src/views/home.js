import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Lodging from '../components/loding';
export default function Home() {
    const isLodging = useSelector(state => state.data.isLodging);
    const navigate = useNavigate()
    return isLodging ? <div className='home-warp'>

        <div className='icon-top'>
            <img src={require('../assets/组 14.png')} alt="" />
            <img src={require('../assets/组 15.png')} alt="" />
            <img src={require('../assets/组 16.png')} alt="" />

        </div>
        <div className='home-text'>
            <img className='new-logo-bg' src={require('../assets/NEWLOGO.png')} alt="" />
            {/* <img className='home-bg' src={require('../assets/home_bg.png')} alt="" />
            <img className='steam-engine' src={require('../assets/home_bg.gif')} alt="" /> */}

            <video className='home-bg' poster="true" preload="true" muted loop autoPlay id="myVideo">
                {/* <source src={require('../assets/home_bg_1.mp4')} type="video/mp4" /> */}
                <source src='http://www.steamapes.com/static/media/home_bg_1.5e8b70e3233dff68f608.mp4' type="video/mp4" />
            </video>
            <div className='home-content'>
                <div className='home-text'>
                    ← SCROLL DOWN</div>
                <div className='text-box'>
                    <p style={{ paddingTop: '.36rem' }}>
                        WELCOME TO
                    </p>
                    <p>
                        THE STEAM APE

                    </p>
                    <p>
                        UNIVERSE
                    </p>
                    <div className='but' onClick={() => { navigate('/about') }}> ENTER</div>
                </div>
            </div>
        </div>
        <div className='foot-text'>



            <p>A limited NFT collection where the token itself doubles as your membership to a swamp
                club for apes. The club is open! Ape in with us.</p>
        </div>
        <Footer />
    </div > : <Lodging></Lodging>;
}