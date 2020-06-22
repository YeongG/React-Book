import React from 'react';
import { ColorConsumer } from '../context/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
                <> 
                    <div style={{width:'64px',height:"64px",backgroundColor:value.state.color}}></div>
                    <div style={{width:'32px',height:"32px",backgroundColor:value.state.subColor}}></div>
                </>
            )}
        </ColorConsumer>
    )
}

export default ColorBox;