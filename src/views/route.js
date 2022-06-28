// import React from 'react'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import Header from '../components/header';
import { LOADING } from '../reducers/action';
import Home from './home';
import About from './about';
import Mints from './mintrouter';
// import Footer from '../components/footer';


export default function App() {
    const dispatch = useDispatch()
    const loadImages = (urlArr) => {
        //参数 图片地址数组
        console.log(urlArr);
        if (urlArr.length <= 0) return;
        let i = 0,
            timer = null,
            len = urlArr.length,
            load = (url) => {
                if (i < len) {
                    const image = new Image();
                    console.log(url);
                    image.src = url;
                    timer = setInterval(() => {
                        if (image.complete) {
                            clearInterval(timer);
                            load(urlArr[i++]);
                        }
                    }, 80);
                } else {
                    // 所有图片加载完后的操作
                    dispatch({
                        type: LOADING,
                        data: true
                    })
                }
            };
        load(urlArr[i]);
    }
    useEffect(() => {
        loadImages([
            require('../assets/bg-1111.png'), 
        require('../assets/logooo.gif'), 
        require('../assets/bg.png'),
        require('../assets/home_bg.gif'),
    ])
    }, [])
    return (
        <>
            <Router>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mint" element={<Mints />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

            </Router>
        </>
    )

}
