import React, { useState } from 'react'
import './index.scss'
export default function Teams(props) {
    const [listIndex, setListIndex] = useState(0)
    const faqData = [
        {
            title: "Does the project have long-term plans and Roadmap?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
        {
            title: "What can I do with my steam ape?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
        {
            title: "How Much will it cost to mint a Steam apes society NFT?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
        {
            title: "How many Steam apes NFTs will available?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
        {
            title: "When will Handsome Monkey king release?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
        {
            title: "How many Steam apes society nfts can i mint?",
            content: `
                  Yes, the project has clear goals and plans, all of them are described in #Roadmap. In addition to developing our own community, we are planning the next collection with the possibility of placing it in the Game and metaverse and creating attributes for it and a number of interesting Utilities.

                `,
        },
    ]
    return (<div className='mint-warp' ref={props.refs}>
        {/* <img className='mint-bg' src={require('../../assets/About_bg.png')} alt="" /> */}

        <div className='teams-text'>
            <div className='listheader'>FAQ</div>

            {
                faqData.map((item, index) => {
                    return <div className="item-box" key={index}>
                        <div className="listItem">
                            <p>{item.title}</p>
                            <img onClick={() => {
                                if (index === listIndex) {
                                    setListIndex(null)
                                } else {
                                    setListIndex(index)
                                }

                            }} src={listIndex === index
                                ? require('../../assets/展开.png')
                                : require('../../assets/展开(1).png')} alt="" />
                        </div>
                        <div className="positiona" style={
                            { height: listIndex === index ? 'auto' : 0, }
                        }>
                            {item.content}
                        </div>
                    </div >
                })
            }
        </div>

        {/* <div className="item-box" v-for="(item, index) in faqData" :key="index + item.title">
        <div className="listItem">
            <p>{{ item.title }}</p>
            <img @click="open(index)" :src="
            listIndex === index
            ? require('../assets/展开.png')
            : require('../assets/展开(1).png')
              " alt="" />
        </div>
        <div className="positiona" :style="{
            height: listIndex === index ? '1.50rem' : 0,
            }">
        {{ item.content }}
    </div>
          </div > */}
        <img className="border" style={{

            marginTop: ".9rem",
            // marginLeft: "-0.14rem"
        }} src={require('../../assets/组 70.png')} alt="" />

    </div >);
}