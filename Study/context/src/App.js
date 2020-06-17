import React from 'react';
import Color from './Context/Color';

const App = () => {
    return (
        <Color.Provider value={{color:"red"}}>
            <Color.Consumer>
                {value => (
                    <div style={{
                        width:"64px",
                        height:"64px",
                        backgroundColor:value.color
                    }}/>
                )}
            </Color.Consumer>
        </Color.Provider>
    )
}

export default App;