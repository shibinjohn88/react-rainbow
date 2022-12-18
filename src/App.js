import React, { userState } from 'react'
import './App.css'
import ColorBlock from './ColorBlock'

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key= {i} color = {color} />
    )
  })
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
