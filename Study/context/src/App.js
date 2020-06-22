import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './context/color';
import SelectColor from './components/SelectColor';

const App = () => {
    return (
        <ColorProvider>
            <SelectColor></SelectColor>
            <ColorBox></ColorBox>
        </ColorProvider>
        
    );
}

export default App;