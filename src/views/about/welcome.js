import React, { useContext, useEffect, useState } from 'react'
import TextContent from '../../content'
import './index.scss'
export default function Welcome(props) {
    const { refs } = props
    const { scrollTop, isShow, MintHeight } = useContext(TextContent)
    const [yanquiStyle, setYueqiuStyle] = useState(0)
    // useEffect((a, b) => {
    //     if (scrollTop > 300 && scrollTop < MintHeight.current?.offsetTop) {
    //         if (isShow) {
    //             setYueqiuStyle(yanquiStyle <= 0 && yanquiStyle - 10)
    //         } else {
    //             setYueqiuStyle(yanquiStyle <= 0 && yanquiStyle + 10)
    //         }

    //     } else {
    //         setYueqiuStyle(0)
    //     }
    // }, [scrollTop])
    return (<div className='welcomer-warp' ref={refs}>
        {/* <img className='welcomer-bg' src={require('../../assets/About_bg.png')} alt="" /> */}
        <div className='welcomer-content'>
            <img className='yueqiu' src={require('../../assets/yueqiu.png')} alt=""
                style={{
                    transform: `translateY(${yanquiStyle}px)`,
                    transition: 'all .2s linear'
                }} />
            <div className='text   fadeInUp'>
                <img className='pt' src={require('../../assets/pt.png')} alt=""
                    style={{
                        transform: `translateX(${yanquiStyle}px)`,
                        transition: 'all .2s linear'
                    }} />
                <div
                    style={{
                        transform: `translateX(${-yanquiStyle}px)`,
                        transition: 'all .2s linear'
                    }}>
                    <p className="h1">WELCOME TO THE STEAM APE universe</p>
                    <p className="h3">
                        Steamape is a collection of 55,00 Nuclear war rebuilds Ape
                        civilization NFTs—unique digital collectibles living on the
                        Ethereum blockchain. Your steam Ape doubles as your steamape game
                        role with special attribute bonus, and grants access to
                        members-only benefits, also It is a pledgeable asset to generate
                        airdrop currency coin: steam and mint free land can build your
                        home . which Other users have to use ETH to buy,Future areas and
                        perks can be unlocked by the community through roadmap
                        activation..
                    </p>
                </div>
            </div>
        </div>
        <img className="border" src={require('../../assets/组 70.png')} alt="" />
    </div>);
}