import React from 'react'
import styled from 'styled-components';
import Winput from '@/components/w-input'
export default function About() {


    return (
        <>
            <Title color='red'>333</Title>
            <Text color='#000'>你好</Text>
            <Winput height={40} prefix={<div>333</div>}></Winput>
        </>


    )
}


const Title = styled.div`
  color: #007f57;
  background-color: ${props => props.color ? props.color : '#6ff'};
`


const Text = styled(Title)`
  font-size: 29px;
`
