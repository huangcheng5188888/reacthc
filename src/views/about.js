import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Lodging from '../components/loding';
import SideNav from '../components/sideNav';
import TextContent from '../content';
import { ACTIONNAV } from '../reducers/action';
import Mint from './about/mint';
import Nfts from './about/nfts';
import Roadmap from './about/roadmap';
import TeamImg from './about/teamImg';
import Teams from './about/teams';
import Welcome from './about/welcome';
import Header from '../components/header';
import Footer from '../components/footer';

let topValue = 0
let a = 0
export default function About() {
    // 滚动条高度
    const [scrollTop, setScrollTop] = useState(0)
    const [isShow, setIsShow] = useState(true)

    const WelcomeHeight = useRef()
    const MintHeight = useRef()
    const NftsHeight = useRef()
    const RoadmapHeight = useRef()
    const TeamsHeight = useRef()
    const TeamImgHeight = useRef()
    // 监听滚动条事件
    const handleScroll = () => {
        setScrollTop(document.body.scrollTop || document.documentElement.scrollTop)

        // 判断滚动条方向
        a = document.body.scrollTop || document.documentElement.scrollTop
        if (a <= topValue) {
            setIsShow(false)
        } else {
            setIsShow(true)
        }
        setTimeout(() => { topValue = a }, 0)
    }
    // 侧边导航点击
    const sideRouter = (type) => {
        switch (type) {
            case 1:
                window.scrollTo(0, 0);
                break;
            case 2:
                window.scrollTo(0, Math.abs(MintHeight.current?.offsetTop));
                break;
            case 3:
                window.scrollTo(0, Math.abs(NftsHeight.current?.offsetTop));
                break;
            case 4:
                window.scrollTo(0, Math.abs(RoadmapHeight.current?.offsetTop));
                break;
            case 5:
                window.scrollTo(0, Math.abs(TeamsHeight.current?.offsetTop));
                break;
            case 6:
                window.scrollTo(0, Math.abs(TeamImgHeight.current?.offsetTop));
                break;

            default:
                break;
        }
    }
    // 页面初始化
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    // dispatch
    const dispatch = useDispatch()
    // 获取redux数据
    const isLodging = useSelector(state => state.data.isLodging);
    // scrollTop 更新
    useEffect(() => {
        // if (scrollTop < MintHeight.current?.offsetTop - 300 && scrollTop >= 0) {
        //     dispatch({ type: ACTIONNAV, data: 1 })
        // } else if (scrollTop < NftsHeight.current?.offsetTop - 300 && scrollTop >= MintHeight.current?.offsetTop - 300) {
        //     dispatch({ type: ACTIONNAV, data: 2 })
        // } else if (scrollTop < RoadmapHeight.current?.offsetTop - 300 && scrollTop >= NftsHeight.current?.offsetTop - 300) {
        //     dispatch({ type: ACTIONNAV, data: 3 })
        // } else if (scrollTop < TeamsHeight.current?.offsetTop - 300 && scrollTop >= RoadmapHeight.current?.offsetTop - 300) {
        //     dispatch({ type: ACTIONNAV, data: 4 })
        // } else if (scrollTop < TeamImgHeight.current?.offsetTop - 300 && scrollTop >= TeamsHeight.current?.offsetTop - 300) {
        //     dispatch({ type: ACTIONNAV, data: 5 })
        // } else if (scrollTop >= TeamImgHeight.current?.offsetTop - 300) {
        //     dispatch({ type: ACTIONNAV, data: 6 })
        // }
    }, [scrollTop])


    return isLodging ? (

        <TextContent.Provider value={
            {
                scrollTop, isShow, MintHeight, TeamImgHeight
            }
        }>
            <div className='about-warp-bg'>
                <Header />
                {/* <SideNav sideRouter={sideRouter} /> */}
                <Welcome refs={WelcomeHeight} />
                <Mint refs={MintHeight} />
                <Nfts refs={NftsHeight} />
                <Roadmap refs={RoadmapHeight} />
                <Teams refs={TeamsHeight} />
                <TeamImg refs={TeamImgHeight} />
                <Footer />
            </div>
        </TextContent.Provider>

    ) : <Lodging />;
}