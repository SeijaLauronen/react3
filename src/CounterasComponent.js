import React, { Component } from 'react';
class CounterasComponent extends Component {

    constructor(props) {
        super();

        this.buttonClicked = this.buttonClicked.bind(this); // tämä vaaditaan, jos halutaan käyttää this.buttonClicked alempana buttonissa    
        this.nollaaClicked = this.nollaaClicked.bind(this);
        this.state =
        {
            countteri: 0
        } // jos state muuttuu, niin render tapahtuu automaattisesti
    }

    //t75
    buttonClicked() {
        this.setState({ countteri: this.state.countteri + 1 });
    }

    //t76
    nollaaClicked() {
        this.setState({ countteri: 0 });
    }


    render() {
        // jos haluaa ehtoja lisätä, niin ne voidaan lisätä vaikka tänne
        //const vari = "blue";        
        const laskurinArvo = this.state.countteri;        
        return (            
            <div>
                <button onClick={this.buttonClicked}>Kasvata laskuria</button>
                <button onClick={this.nollaaClicked}>Nollaa laskuri</button>                
                <Laskuri arvo = {laskurinArvo}/>

            </div>
        )
    }
}

function Laskuri(props) {
    const vari = "red";    
    let txt;
    if (props.arvo > 10) {
        txt=  <p>Laskuri komponentista: <span style={{ color: vari, fontWeight: "bold" }}> {props.arvo}</span></p>;
    } else {
        txt=  <p>Laskuri komponentista: {props.arvo}</p>;
    }
    return txt;
}


export { CounterasComponent };