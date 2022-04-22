


import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { sideNav } from '../../data';
import './index.scss'
export default function SideNav(props) {
    const isActionNav = useSelector(state => state.data.isActionNav);
    const [nav] = useState(sideNav)
    const { sideRouter } = props
    return (<div className='sidenav-warp' >
        {nav.map(item => {
            return <div className='side-item' key={item.type}>
                <img onClick={() => { sideRouter(item.type) }} className='nav' src={item.type === isActionNav ? item.img : item.active_img} alt="" />
                {
                    // eslint-disable-next-line jsx-a11y/alt-text
                    item.type !== 6 && <img className="fg" src={require("../../assets/fg.png")} />
                }

            </div>
        })}
    </div>);
}