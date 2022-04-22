import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import Lodging from '../components/loding';
let timeis = null
export default function Mints() {
    const isLodging = useSelector(state => state.data.isLodging);
    const [nimt, setNimt] = useState(require('../assets/组 8141.png'))
    const data = [
        require('../assets/组 8141.png'),
        require('../assets/组 8142.png'),
        require('../assets/组 8143.png'),
        require('../assets/组 8144.png'),
        require('../assets/组 8145.png'),
        require('../assets/组 8146.png'),
        require('../assets/组 8147.png'),
        // require('../assets/组 8141.png'),
    ]
    const [sl, setSl] = useState(8)
    // 页面初始化
    useEffect(() => {
        let i = 1
        timeis = setInterval(() => {
            setNimt(data[i])
            i++
            if (i > 6) {
                i = 0
            }

        }, 1000)
        return () => {
            clearInterval(timeis)
            timeis = null
        }
    }, [])

    return isLodging ? <div className='mints-warp your-warp'>

        <Header />
        {/* <img className='mints-bg' src={require('../assets/About_bg.png')} alt="" /> */}
        <div className='mints-content'>
            <div className='your-h1'>
                YOUR STEAM APE
            </div>
            <div className='text-centent'>



                <div className='box'>
                    <p className='t1'>minted:</p>
                    <p className='t2'>  1234/5000</p>
                    <div className='t3'>
                        <div className='img-position'>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img className='img1' src={nimt} />
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img className='img2' src={require('../assets/？.png')} />
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img className='img1' src={require('../assets/图像 1.png')} />

                        </div>
                    </div>
                    <p className='t4'>
                        <p>Total gas</p>
                        <p className='tp1'>0 &nbsp; + &nbsp;  GAS</p>
                    </p>
                    <div className='jg'></div>
                    <p className='t5'>
                        <p>Amount</p>
                        <p className='tp1'>0 &nbsp; X   &nbsp; 0.15 </p>
                    </p>
                </div>
            </div>
            <div className='input1'>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className='img1' src={require('../assets/组 72.png')} onClick={() => {
                    if (sl > 0) {
                        setSl(sl - 1)
                    }
                }} />
                <input type='text' value={sl} onChange={(e) => {
                    e.target.value % 1 === 0 && setSl(e.target.value)
                }} />
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className='img1' src={require('../assets/组 74.png')} onClick={() => {
                    setSl(sl + 1)
                }} />

            </div>
            <div className='but-nimt'> MINT</div>
            <div className='text-nimt'>

                Connected As： IUH53...662


                <span>axjz</span>
            </div>
        </div>
        <Footer />
    </div> : <Lodging></Lodging>;
}