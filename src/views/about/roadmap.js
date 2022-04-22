import React, { useState } from 'react'
import './index.scss'
import { Waypoint } from 'react-waypoint';

export default function Roadmap(props) {
    const [boardFadeInUp, setBoardFadeInUp] = useState('')
    const [boardFadeInUp1, setBoardFadeInUp1] = useState('')

    return (<div className='mint-warp' ref={props.refs}>
        {/* <img className='mint-bg' src={require('../../assets/About_bg.png')} alt="" /> */}
        <div className='Roadmap-text'>
            <Waypoint onEnter={() => {
                setBoardFadeInUp('fadeInUp')
            }}>
                <div className={`${boardFadeInUp}`}>
                    <div className='roadmap'> ROADMAP</div>
                    <div className='content'>
                        <div className='content1'>
                            <p>
                                What this means is that instead of just receiving a pretty looking statue,Steamapes holders will Obtained airdrop coin STM by avatar per day.

                            </p>
                            <p>

                                STM is the coin that use in steamape gamefi allow steamape user Build land, plant, mine, develop technology, build weapons and battle robots to get rewards.

                            </p>

                        </div>
                        <img className='content-img' src={require('../../assets/cl.png')} alt="" />
                        <div>
                            <div className='content2'>
                                <p>
                                    We’re in this for the long haul.

                                </p>
                                <p>

                                    We will develop NFT's circulation ghostwriting, blockchain functions, blockchain games on the basis of NFT, and then 3D, to create a blockchain community then final to the Metavrse.

                                </p>
                            </div>
                            <div className='content3'>
                                <p>

                                    We will also highlight 3D NFT characters,Wear steam armor created by the apes using the latest technology.


                                </p>
                                <p>


                                    3D NFT characters can get NFT land,It's going to be a whole new metaverse journey.

                                </p>
                            </div>
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
            </Waypoint>
            <Waypoint onEnter={() => {
                setBoardFadeInUp1('fadeInUp')
            }}>

                <div className={`img-box ${boardFadeInUp1}`}>

                    <img className='img-tb' src={require('../../assets/img_nft1.png')} alt="" />
                    <img src={require('../../assets/img_nft2.png')} alt="" />
                    <img src={require('../../assets/img_nft3.png')} alt="" />
                    <img src={require('../../assets/img_nft4.png')} alt="" />
                    <img src={require('../../assets/img_nft5.png')} alt="" />
                    <img className='img-tb' src={require('../../assets/img_nft6.png')} alt="" />
                </div>
            </Waypoint>

            <img className="border" style={{
                marginBottom: ".57rem",
                marginTop: ".75rem",
                marginLeft: "-0.14rem"
            }} src={require('../../assets/组 70.png')} alt="" />

            <div className='roadmap-foot'>
                {/* "animated bounceOutLeft" */}

                <div className='tools'>
                    <div className='p1' >
                        COMMUNITY TOOLS
                    </div>
                    <div className='p2'>
                        Here are some helpful tools created by the Steam apes community. Please note that these are unofficial in nature. Every assignment of an ape's overall value or rarity is inherently subjective.
                    </div>
                </div>
                <div className='but-box'>
                    <div className='but'>NFTEXP.IO</div>
                    <div className='but'>RARITY.TOOLS</div>
                </div>
            </div>

        </div>
        <img className="border" src={require('../../assets/组 70.png')} alt="" />

    </div>);
}