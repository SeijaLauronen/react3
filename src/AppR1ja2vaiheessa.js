import React from 'react';
import './App.css';
import Testheader from './Testheader';
import Search from './Search'; //81-83, poisto ei onnistunut tällä rakenteella
import SearchWithDelete from './SearchWithDelete';//(81-) 84 rakenne hieman uusiksi poistoa varten
//Lopulliset React2 tehtävät hakemistossa C:\Users\Seija\Seija\Opiskelu\2020WebJatko\React\react2tehtavat
//ja palautus C:\Users\Seija\Seija\Opiskelu\2020WebJatko\React\React2Palautus

function App() {
  
  return (
    <div>
      <header>
        <h1>React 1 tehtävät 73-79</h1>
      </header>      
      <hr />
      <Testheader title="---Tehtävät 81-83 ----" />
      
      <Search />
      <Testheader title="---Tehtävät 84 ----" />
      <SearchWithDelete/>

    </div>
  );
}





export default App;
