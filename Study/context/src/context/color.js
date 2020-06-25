import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state:{color:'black',subColor:"red"},
    actions:{
        setColor:() => {},
        setSubColor:() => {}
    }
});

const ColorProvider = ({children}) => {
    console.log("ColorProvider 랜더링");
    const [color,setColor] = useState('black');
    const [subColor,setSubColor] = useState('red');

    const value = { 
        state:{color,subColor},
        actions:{setColor,setSubColor}
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );   
};


export {ColorProvider};
export default ColorContext;