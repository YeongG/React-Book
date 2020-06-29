import React from 'react';
import Counter from './Component/Counter';
import Todos from './Component/Todos';

const App = () => {
  return (
    <div>
      <Counter/>
      <hr />
      <Todos/>
    </div>
  );
}

export default App;
