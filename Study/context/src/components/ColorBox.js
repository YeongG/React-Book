import React,{useContext} from 'react';
import ColorContext from '../context/color';

const ColorBox = () => {
    console.log("ColorBox 랜더링");
    const {state} = useContext(ColorContext);
    return (
        <>
            <div style={{width:'64px',height:"64px",backgroundColor:state.color}}></div>
            <div style={{width:'32px',height:"32px",backgroundColor:state.subColor}}></div>
        </>
    );
}

export default ColorBox;