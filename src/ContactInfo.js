import React, { Component } from 'react';
//import ErrorBoundary from './ErrorBoundary'; //86
// Huhhuh, tuon fetchID:n hakuun autto tämä: 
//https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
//Toimii, mutta tulee state ja unmounted virhettä, täältä vinkkiä korjaamiseen:
//https://www.debuggr.io/react-update-unmounted-component/
// Errorboundervideo: https://www.youtube.com/watch?v=DNYXgtZBRPE

class ContactInfo extends Component {

    constructor(props) {
        super();

        //piti ottaa tuo nulli kiinni, kun muuten tyssähti tuohon errortestitapaukseen jo tässä...
        let haettava=0;
        /*
        if (props.match !== null){
            haettava= props.match.params.id;
        }
        */
    // 86. HUH, näin päästiin tästä virheestä yli, kutsuttaessa testerrorcontact:
       props.match ? haettava= props.match.params.id:haettava=0
       
        this.state =
        {
            fetchID: haettava,
            message: '',
            customerdata: '',
            countFetched: 0
        }
        
    }

    // Tämä on tyypillisesti Reactissa se paikka, minne tehdään datan haun kutsu
    componentDidMount() {
        this.fetchData();
    }

  
    async fetchData() {

        this.setState({ message: 'Haetaan yhteystietoja id:lle ' + this.state.fetchID + "..." });

        let searchstr = '?';
        if (this.state.fetchID !== '') {
            searchstr += "id=" + this.state.fetchID + "&";
        }

        let response = await fetch("http://localhost:3004/asiakkaat" + searchstr)
        let data = await response.json();
        console.log("JSON ", data);

       

        const items = data.map((customer) =>
            <p key={(customer.id).toString()}>
                Id: {customer.id}<br />
                Nimi: {customer.nimi}<br />
                Osoite: {customer.osoite}<br />
                Postinro: {customer.postinumero}<br />
                Postitmp: {customer.postitmp}<br />
                Puh: {customer.puh}<br />
            </p>
        );

        this.setState({ customerdata: items });
        let lkm=data.length;
        this.setState({countFetched: lkm}); //86:sta varten

        this.setState({ message: '' });
        if (data.length === 0) {
            this.setState({ message: 'Parametrilla ei löytynyt yhteystietoja (Tämä ei ole Errorboundervirhe)' });
            this.setState({countFetched: lkm}); //86:sta varten
        }
        
    }

    render() {
        //Jahas, no varmaan siitä asyncistä johtuen...jotenkin pomppii, eikä tulekaan tähän vasta sen jälkeen...??
        /*
        console.log ("PITUUS A:"+this.state.countFetched)
        if (this.state.countFetched > 1) { 
            console.log ("PITUUS B:"+this.state.countFetched)
            throw new Error('Useita asiakkaita annetulla parametrilla '+ this.props.match.params.id)            
        }
        */
        
       if (this.props.testpara > 50) {
        throw new Error('Contact: Testataan virhettä. Sulje sisältö ylänurkan ruksista, niin tulee "tuotantonäkymä"')
       }




        return (
             //t86
        
            <div>
                <h1>Yhteystiedot</h1>
                

                {this.props.match ?
                    <p>Parametri: {this.props.match.params.id}</p>
                    : <p>Hae ensin asiakas, jonka yhteystiedot haluat</p>
                }

                <p>{this.state.message}</p>
                
                {this.state.customerdata}
                
               
            </div>
        );
    }
}



export default ContactInfo;