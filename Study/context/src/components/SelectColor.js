import React from 'react';
import { ColorConsumer } from '../context/color';

const colors = ["red","orange","yellow","green","blue","indigo","violet"];

const SelectColor = () => {
    return (
        <>
            <div>
                <h2>색상을 선택하세요</h2>
            </div>
            <ColorConsumer>
            {({actions}) => (
                <div style={{display:"flex"}}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{background:color,width:"100px",height:"100px",cursor:"pointer"}}
                            onClick={() => actions.setColor(color)}
                            onContextMenu={e => {actions.setSubColor(color);e.preventDefault()}}
                        />
                    ))}
                </div>
            )}
            </ColorConsumer>
        </>
    )
}

export default SelectColor;