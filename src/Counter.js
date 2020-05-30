import React, { Component } from 'react';
class Counter extends Component {

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
        const vari = "red";
        const laskurinArvo = this.state.countteri;

        //t77
        let txt ;
        if (laskurinArvo > 10) {
            txt = <p>Laskuri: <span style={{ color: vari, fontWeight: "bold" }}> {this.state.countteri}</span></p>;
        } else {
            txt = <p>Laskuri: {this.state.countteri}</p>;
        }


        return (
            <div>
                <button onClick={this.buttonClicked}>Kasvata laskuria</button>
                <button onClick={this.nollaaClicked}>Nollaa laskuri</button>

                {txt}

            </div>
        )
    }
}

export { Counter };