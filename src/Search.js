import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super();

        this.buttonClicked = this.buttonClicked.bind(this); // tämä vaaditaan, jos halutaan käyttää this.buttonClicked alempana buttonissa
        this.onNameChanged = this.onNameChanged.bind(this); // tämä vaaditaan, jos halutaan käyttää this.onAgeChanged alempana buttonissa
        this.onAddressChanged = this.onAddressChanged.bind(this);
        this.onPostalNroChanged = this.onPostalNroChanged.bind(this);
        this.poistaClicked =this.poistaClicked.bind(this);

        this.state =
        {
            searchName: '',
            searchAddress: '',
            searchPostalNro: '',
            //customerdata: 'Loading...' //tämä oli aluksi, kun tehtiin haku jo sivun latautuessa
            message: '', //laitetaan odotus kuitenkin omaan palikkaansa
            customerdata: ''//Tulee suorittaessa virhe: Text nodes cannot appear as a child of <tbody> 
        }

    }

    // Tämä on tyypillisesti Reactissa se paikka, minne tehdään datan haun kutsu
    componentDidMount() {
        //this.fetchData();        Otetaan nyt tästä pois, niin ei hae kaikkia heti sivun latautuessa
    }

    buttonClicked() {
        //alert(this.state.searchName);        
        //this.setState({ customerdata: 'Loading...' }); //tämän voi laittaa tänne tai tuonne itse fetchiin
        this.fetchData();
    }


    onNameChanged(event) {
        this.setState({ searchName: event.target.value });
    }

    onAddressChanged(event) {
        this.setState({ searchAddress: event.target.value });
    }

    onPostalNroChanged(event) {
        this.setState({ searchPostalNro: event.target.value })
    }

    poistaClicked(){
        alert("poistetaan");
        this.setState({ searchPostalNro: "1234" })
    }

    async fetchData() {
        this.setState({ customerdata: '' });//tyhjennetään entiset hakutulokset
        this.setState({ message: 'Loading...' });//Vaihtoehtoisesti buttonclickin kanssa vois laittaa tänne (tai vaikka molempiin...)

        let searchstr = '?';
        if (this.state.searchName !== '') {
            searchstr += "nimi=" + this.state.searchName + "&";
        }
        if (this.state.searchAddress !== '') {
            searchstr += "osoite=" + this.state.searchAddress + "&";
        }

        if (this.state.searchPostalNro !== '') {
            searchstr += "postinumero=" + this.state.searchPostalNro + "&";
        }

        //alert(searchstr);

        let response = await fetch("http://localhost:3004/asiakkaat" + searchstr)
        let data = await response.json();
        //console.log("Searchdata: " + data);
        //console.log("SearchdataString " + JSON.stringify(data));
        console.log("JSON ", data);

        //Vaihtoehto 1
        const items = data.map((customer) =>
            //<li key={(customer.id).toString()}>{customer.nimi}  {customer.osoite} {customer.postinumero} {customer.postitmp} {customer.puh}</li>             
            dataToTable(customer)
        );
        //return items; //ei käytetäkään returnia
        //OHO, ei saanut noitten tagien väliin laittaa tyhjää, tuli muuten: Whitespace text nodes cannot appear as a child of <tr>
        let tHeaderRow = <tr><th>Nimi</th><th>Osoite</th><th>Postinro</th><th>Postitoimipaikka</th><th>Puh</th><th></th></tr>;
        let resultTable = <table border='1'><tbody>{tHeaderRow}{items}</tbody></table>;

        //this.setState({ customerdata: items });
        this.setState({ customerdata: resultTable });

        //Vaihtoehto 2
        // tätä jos kokeilee, pitäää renderiss vaihtaa table:n tilalle vaikka <ul></ul>
        /*
        var listitems = [];
        data.forEach(customer => {
            console.log("JSON ", customer.nimi);
            listitems.push(<li key={(customer.id).toString()} >  {customer.nimi}  {customer.osoite} {customer.postinumero} {customer.postitmp} {customer.puh}</li>);
        });
        //return listitems;  //ei käytetäkään returnia
        this.setState({ customerdata: listitems });    
        */

        this.setState({ message: '' });
        //if (data ==''){ //komentokehoite ehdotti laittamaan tähän ===, mutta silloin ei toimi
        if (data.length === 0) {
            this.setState({ message: 'Hakuehdon täyttäviä asiakkaita ei löytynyt' });
        }

    }

    render() {
        return (
            <div>

                <form>
                    <label>Nimi:</label>
                    <input type="text" name="nimi" onChange={this.onNameChanged} />
                    <br />
                    <label>Osoite:</label>
                    <input type="text" name="osoite" onChange={this.onAddressChanged} />
                    <br />
                    <label>Postinumero:</label>
                    <input type="text" name="postinumero" onChange={this.onPostalNroChanged} />
                </form>
                <button onClick={this.buttonClicked}>Hae</button>
                <br />
                <label>{this.state.message}</label>

                {this.state.customerdata}


            </div>
        )
    }
}

function poista(){
    //alert("Poista"); tätä kutsuu jo piirrettäessä
    //enkä saanut yhdistettyä this.poistaClicked:iin
    //tuo  dataToTable:n alin linkki lie paras johtolanka, pitääkin muuttaa rakennetta    
}

function dataToTable(props) {
    let row = '';    
    //mites tuon poiston saa kutsuttua
    //https://stackoverflow.com/questions/50015445/react-dynamically-create-buttons-based-on-number-of-results
    //https://stackoverflow.com/questions/56775842/i-want-to-create-a-button-inside-a-cell-of-react-table-column
    //https://stackoverflow.com/questions/44710135/react-onclick-for-dynamically-generated-components
    
    
    row = <tr key={(props.id).toString()}>
        <td>{props.nimi}</td>
        <td> {props.osoite}</td>
        <td>{props.postinumero}</td>
        <td> {props.postitmp} </td>
        <td>{props.puh}</td>                
        <td><button onClick={poista()}>Poista ei toimi tässä</button></td>
    </tr>
    return row;
}

export default Search;