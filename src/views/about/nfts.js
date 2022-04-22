import React from 'react'
import './index.scss'
export default function Nfts(props) {
    return (<div className='mint-warp' ref={props.refs}>
        {/* <img className='mint-bg' src={require('../../assets/About_bg.png')} alt="" /> */}
        <div className='nfts-text'>

            <div className="listheader">
                {/* <img src={require('../../assets/Team.png')} alt="" /> */}
                OUR NFT'S
            </div>
            <div className="animate-img">
                <img src={require("../../assets/nft1.png")} alt="" />
            </div>
            <div className="animate-img1">
                <img src={require("../../assets/nft1.png")} alt="" />
            </div>

        </div>

    </div>);
}