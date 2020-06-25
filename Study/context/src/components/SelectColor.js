import React from 'react';
import ColorContext from '../context/color';
import { useContext } from 'react';

const colors = ["red","orange","yellow","green","blue","indigo","violet"];

const SelectColor = () => {
    const {actions} = useContext(ColorContext);
    console.log("SelectColor 랜더링");
    return (
        <>
            <div>
                <h2>색상을 선택하세요</h2>
            </div>
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
        </>
    )
}

export default SelectColor;