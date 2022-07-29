import React, {useState} from 'react'
import styled from 'styled-components';

export default function Winput(props) {
    const {
        height = 40,

    } = props
    /**
     * height  input高度
     *
     *
     * */
    const [value,setValue] =useState('')
    const getValue=(v)=>{
        setValue(v.target.value)
    }


    return <Title onChange={getValue} value={value} color='red' height={height}/>
}




const Title = styled.input`
  border: 1px solid #dcdfe6;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: ${props => props.height}px;
  padding: 0 15px;
  outline: none;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
  line-height: ${props => props.height}px;

  &:hover {
    border-color: #c0c4cc;

  }

  &:focus {
    outline: none;
    border-color: #409eff;
  }
`


