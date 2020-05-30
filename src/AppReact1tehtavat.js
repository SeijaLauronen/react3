import React from 'react';
import './App.css';
import Testheader from './Testheader';
//import Content from './Content';
//import { Home } from './Home';
import TableClass from './t73';
import TableClass2 from './t74';
import {Counter} from './Counter'; // 75-77  pitää olla samasaa muodossa kuin export
import {CounterasComponent} from './CounterasComponent';   //t 78
import {Opiskelijat} from './Opiskelijat';//t79



function App() {
  //Laitoin nyt otsikon ja kentän nimen samoiksi, oikeasti pitäiti varmaan laittaa eri
  // t74
  let CustaArray = [];
  let row = { id: 1, Nimi: "Kalle", Osoite: "Testikatu 1", Aloitusvuosi: "2019" };
  CustaArray.push(row);
  row = { id: 2, Nimi: "Kalle2", Osoite: "Testikatu 2", Aloitusvuosi: "2018" };
  CustaArray.push(row);
  row = { id: 3, Nimi: "Ville", Osoite: "Testikatu 3", Aloitusvuosi: "2017" };
  CustaArray.push(row);
  row = { id: 4, Nimi: "Matti", Osoite: "Testikatu 4", Aloitusvuosi: "2016" };
  CustaArray.push(row);

  let StudentArray = [];
  row = { id: 1, Oppilas: "Oppilas Möttönen", Kurssi: "Historia", Arvosana: "8" };
  StudentArray.push(row);
  row = { id: 2, Oppilas: "Oppilas Kalle", Kurssi: "Maantieto", Arvosana: "5" };
  StudentArray.push(row);
  row = { id: 3, Oppilas: "Oppilas Ville", Kurssi: "Ruotsi", Arvosana: "9" };
  StudentArray.push(row);
  row = { id: 4, Oppilas: "Oppilas Matti", Kurssi: "Matematiikka", Arvosana: "7" };
  StudentArray.push(row);

  
//t79
//https://codeburst.io/reactjs-a-quick-tutorial-to-build-dynamic-json-based-form-a4768b3151c0

const opiskelijatJSON  =[
  {key:"1", etunimi:"Matti", sukunimi:"Ruohonen",aloitusvuosi:"2001"},
  {key:"2", etunimi:"Teppo", sukunimi:"Ruohonen",aloitusvuosi:"2002"},
  {key:"3", etunimi:"Seppo", sukunimi:"Ruohonen",aloitusvuosi:"2003"},
  {key:"4", etunimi:"Jatta", sukunimi:"Tepponen",aloitusvuosi:"2004"},
]

  /* */
  return (
    <div>
      <header>
        <h1>React 1 tehtävät 73-79</h1>
      </header>      
      <hr />
      <Testheader title="---Tehtävä 73----" />
      <TableClass tnimi="73" nimi="Kalle" osoite="Testikatu 5" avuosi="2019" />
      <hr />
      <Testheader title="---Tehtävä 74----" />
      <TableClass2 customers={CustaArray} col1="Nimi" col2="Osoite" col3="Aloitusvuosi" />
      <TableClass2 customers={StudentArray} col1="Oppilas" col2="Kurssi" col3="Arvosana" />
      <hr />
      <Testheader title="---Tehtävät 75 -77 ----" />
      <Counter  />
      <hr />
      <Testheader title="---Tehtävä 78 ----" />
      <CounterasComponent  />
      <hr />
      <Testheader title="---Tehtävä 79 ----" />      
      <Opiskelijat oppilaat={opiskelijatJSON} />

    </div>
  );
}





export default App;
