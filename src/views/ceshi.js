import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { innser } from '../reducers/action';
// import Header from 'components/header';
import TextContent from '../content';
import Header from '../components/header';
export default function Home() {
    let [num, setNum] = useState(0);
    let [scrollTop, setScrollTop] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const count = useSelector(state => state.data.items);
    const bindHandleScroll = () => {
        setScrollTop(document.body.scrollTop || document.documentElement.scrollTop)
    }
    useEffect(() => {
        console.log(count);
        window.addEventListener('scroll', bindHandleScroll)
      
    }, []); 
    useEffect(() => {
        setNum(num + 1)
        dispatch(innser(333322))
    }, [scrollTop]);
    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", bindHandleScroll);
            console.log('willUnmount');
        }
    }, []);
    const a = () => {
        navigate('/login')
    }
    return (
        < TextContent.Provider value={
            {
                usesname: num,
                setUsesname: setNum
            }
        }>
            <div className='a'>
                {/* {num}

                <div onClick={a}>
                    你好
                </div> */}
                <Header num={num} scrollTop={scrollTop} />

            </div>
        </ TextContent.Provider>);
}