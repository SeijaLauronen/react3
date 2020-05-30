import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Täältä löysin ehkä kuitenkin selkeimmät ohjeet:
//https://fullstack-hy2019.github.io/osa2/palvelimella_olevan_datan_hakeminen
//npm install axios --save

export default function SearchWithHooks(props) {
    const [count, setCount] = useState(0);
    const [customerdata, setCustomerdata] = useState({ customerrows: [] });
    //const [customerdata, setCustomerdata] = useState();//vaihtoehtoinen yllä olevalle. En meinannut saada luettua dataa, jompi kumpi ei aina sovellu toiselle toteutukselle
    const [customerdatacount, setCustomerdatacount] = useState(0);
    const [customerlist, setCustomerlist] = useState();
    const tableHeaderRow = usetableHRow(customerdatacount); //custom hook (?)

    //Aluksi oli tässä muodossa, sitten muutin kuten videolla
    /*
    const [nimi,setNimi]=useState(''); //handleNimiChange
    //<input type="text" name="nimi" value ={nimi} onChange={handleChange} />
    const [osoite,setOsoite]=useState(''); //handleOsoiteChange
    //<input type="text" name="osoite" value ={osoite} onChange={handleChange}  />
    */
    const nimi = useFormInput('');
    const osoite = useFormInput('');
    const [searchString, setSearchString] = useState('');
    const [message, setMessage] = useState('');
    const asiakasTable = useAsiakasdata(customerdata); //No en saanut tälleesti toteutettua, custom hook olisi ollut tämä



    useEffect(() => {
        if (count > 0) { //ei haeta ComponentOnMount:ssa
            //console.log('effect')
            axios.get('http://localhost:3004/asiakkaat' + searchString)
                .then(response => {
                    console.log('promise fulfilled')
                    setCustomerdata(response.data)
                    setCustomerdatacount(response.data.length);
                    setMessage('');
                    //if (customerdatacount===0 && count>0){//ei ole vielä mennyt stateen käytettäväksi tässä
                    if (response.data.length === 0) {
                        setMessage("Asiakkaita ei löytynyt annetulla hakuehdolla");
                    }
                })
        }
    }, [count])  //kun count muuttuu, hakee uusiksi


    useEffect(() => {
        //setSearchString('?nimi_like='+nimi+'&'+'osoite_like='+osoite);        
        setSearchString('?nimi_like=' + nimi.value + '&' + 'osoite_like=' + osoite.value);
    });


    /*
    function handleNimiChange(e) {
        setNimi(e.target.value);
    }
    function handleOsoiteChange(e) {
        setOsoite(e.target.value);
    }
    */


    useEffect(() => {
        if (count > 0) {
            document.title = `You clicked ${count} times`;//Tämän tilalle datan haku?
        }
    });


    /*
    //No ei pelitä tässä tämä...
    useEffect(() => {
        if (customerdatacount===0 && count>0){
            setMessage("Asiakkaita ei löytynyt annetulla hakuehdolla");
        }
    }, [customerdata,count]);//kun customerdata muuttuu, katostaan, oliko siinä rivejä
*/

    //Saiskohan tämänkin eventin yhteiseksi Hae ja Poista:lle...
    function handleButtonClick(e) {
        setCustomerdata ([]); //tyhjennetään data ennen uutta hakua
        setCustomerdatacount(0);//tyhjennetään data ennen uutta hakua
        setMessage("Loading....");
        setCount(count + 1); //tämän voisi laittaa suoraan tuonne buttonin koodiinkin
        //alert(searchString);
        //alert(count);//alerttiin mennessä ei vielä ole kasvattanut tuota counttia! vasta tästä poistuttaessa!!        
        //alert (e.target.value);
    }

    return (

        <div>
            <label>Hakustring: <i>{searchString}</i></label>   <br /><hr />
            <form>
                <label>Nimi:</label>
                <input {...nimi} />
                <br />
                <label>Osoite:</label>
                <input {...osoite} />
                <br />
                
            </form>
            <button onClick={handleButtonClick}>Hae</button>
            <br />

            <p>{message}</p>
            <p>{customerlist}</p>
            <table border="1"><tbody>
                {tableHeaderRow}
                <Asiakaslista asiakkaat={customerdata}></Asiakaslista>
            </tbody></table>
            <table border="1"><tbody>
                {asiakasTable}
            </tbody></table>

        </div>

    )

}


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}

//Tästä en saanut tuota dataa mäpättyä ilman että tuli virhe jossain, yleensä tuon lenhtin tutkimisessa undefined:lle
function useAsiakasdata(as) {
    let items = "";
    /*
        if (as.length > 0) {
    
            items = as.asiakkaat.map((customer) =>
                //<li key={(customer.id).toString()}>{customer.nimi}  {customer.osoite} {customer.postinumero} {customer.postitmp} {customer.puh}</li>             
                //dataToTable(customer)
    
                <tr key={(customer.id).toString()}>
                    <td>{customer.nimi}</td>
                    <td> {customer.osoite}</td>
                    <td>{customer.postinumero}</td>
                    <td> {customer.postitmp} </td>
                    <td>{customer.puh}</td>
                    <td><button value={customer.id} onClick={((e) => this.poistaClicked(e, customer.id))}>Poista </button></td>
                </tr>
    
            );
        }
        */
    return items;
}

//custom hook headerille rikseen, kun en saanut sitä tuonne datan yhteyteen
function usetableHRow(customerdatacount) {
    let tHeaderRow = "";
    if (customerdatacount > 0) {
        tHeaderRow = <tr key="-1"><th>Nimi</th><th>Osoite</th><th>Postinro</th><th>Postitoimipaikka</th><th>Puh</th><th>Poista, crash</th><th>Poisto, kesken</th></tr>;
    }
    return tHeaderRow
}

function Asiakaslista(as) {

    function handleButtonClick(e) {
        alert("Poistettava id:" + e.target.value);
    }

    let tHeaderRow = <tr key="-1"><th>Nimi</th><th>Osoite</th><th>Postinro</th><th>Postitoimipaikka</th><th>Puh</th><th>Poista</th><th>Yhteystietoihin (href)</th></tr>;
    let items = "";
    //let items = <tr key="-1"><th>Nimi</th><th>Osoite</th><th>Postinro</th><th>Postitoimipaikka</th><th>Puh</th><th>Poista</th><th>Yhteystietoihin (href)</th></tr>;

    if (as.asiakkaat.length > 0) {

        items = as.asiakkaat.map((customer) =>
            //<li key={(customer.id).toString()}>{customer.nimi}  {customer.osoite} {customer.postinumero} {customer.postitmp} {customer.puh}</li>             
            //dataToTable(customer)

            <tr key={(customer.id).toString()}>
                <td>{customer.nimi}</td>
                <td> {customer.osoite}</td>
                <td>{customer.postinumero}</td>
                <td> {customer.postitmp} </td>
                <td>{customer.puh}</td>
                <td><button value={customer.id} onClick={((e) => this.poistaClicked(e, customer.id))}>Poista (ei toteutettu) </button></td>
                <td><button value={customer.id} onClick={handleButtonClick}>TEST: Poista </button></td>
            </tr>

        );
    }
    let retval = tHeaderRow;
    retval += items; //no mikä se nyt tässäkin tökkii??!! MIKSI EN SAA TÄHÄN MUKAAN TUOTA HEADER ROWTA!!!! Foreach:lla se kai onnistuisi
    //return retval;
    return items;
}
