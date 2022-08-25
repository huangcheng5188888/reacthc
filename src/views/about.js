import React, { useState } from 'react'
import  {useSelector,useDispatch} from 'react-redux'

export default function About() {

const count = useSelector(state => state.data.items);

const dispatch = useDispatch();
const [ass,b] = useState('1')
function handclick(params) {
    dispatch({type:'oooo',value:ass})
}
function handchange(params) {
    // dispatch({type:'oooo'})
   
    var value =params.target.value
    b(value)

}
    return (
        <>
         {count}
         <button  onClick={handclick}>
        修改
         </button>
         <input type="text" onChange={handchange} />

        </>


    )
}


