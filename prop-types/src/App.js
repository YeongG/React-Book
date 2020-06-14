import React from 'react';
import PropTypes from 'prop-types';


const App = ({name}) => {
  return (
    <div>{name}</div>
  )
}

App.propTypes = {
  name:PropTypes.number
}

export default App;
