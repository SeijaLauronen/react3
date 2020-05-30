
import React, { Component } from 'react';
/*

73. Tee React-komponentti (olkoon nimeltään TableClass), joka renderöi 
html taulukon (table-elementin). Taulukossa on sarakkeet nimi, osoite 
ja aloitusvuosi ja komponentti renderöi vain otsikkorivin ja yhden rivin
 em. otsikon alle. Toteuta React-sovellus, jossa käytät em TableClass-komponenttia
 niin, että otsikkorivin alle tuleva data annetaan propertynä TableClass-komponentille.
*/

class TableClass extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>


                <table>
                    <tbody>
                        <tr><th>Nimi</th><th>Osoite</th><th>Aloitusvuosi</th></tr>
                        <tr><td>{this.props.nimi}</td><td>{this.props.osoite}</td><td>{this.props.avuosi}</td></tr>
                    </tbody>
                </table>

            </div>
        )
    }


}

export default TableClass;

