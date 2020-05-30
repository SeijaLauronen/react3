import React, { Component } from 'react';

class Opiskelijat extends Component {

    constructor(props) {
        super();

    }

    

    render() {
        
        return (
            <div>   
                <ol>             
                <Listrows opisk={this.props.oppilaat} />
                </ol>
            </div>
        )
    }
}

// voidaan luoda komponentin sisällä komponentti:

function Listrows(props) {
    //no en sitten kuitenkaan käyttänyt näitä:
    //https://alligator.io/js/json-parse-stringify/
    /*
        JSON.parse() takes a JSON string and transforms it into a JavaScript object. 
        JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
    */              
    console.log(props.opisk);    
         
    //Kappas vaan, näinkin onnistuisi:
    //ja huom, huomauttaa, jos ei ole annettu key:tä. joka voisi olla muukin kuin tuo nyt laitettu opiskelija.key
    var listitems = [];
    props.opisk.forEach(opiskelija => {
        listitems.push ( <li  key={(opiskelija.key).toString()} >  {opiskelija.etunimi}  {opiskelija.sukunimi}  {opiskelija.aloitusvuosi}</li>);
    });    
    //return listitems; //ota tämä pois kommenteista, jos tulostat tällä, ja laita alempi return kommentteihin
    
    const items = props.opisk.map((opiskelija) =>    
          <li key={(opiskelija.key).toString()}>{opiskelija.etunimi}  {opiskelija.sukunimi} {opiskelija.aloitusvuosi} </li>                          
     );
 
    return items;
}






export { Opiskelijat };