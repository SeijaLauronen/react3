import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Täältä löysin ehkä kuitenkin selkeimmät ohjeet:
//https://fullstack-hy2019.github.io/osa2/palvelimella_olevan_datan_hakeminen
//npm install axios --save

export default function SearchWithHooks(props) {
    const [count, setCount] = useState(0);
    const [customerdata, setCustomerdata] = useState({ customerrows: [] });
    //const [customerdata, setCustomerdata] = useState();
    const [customerlist, setCustomerlist] = useState();
    /*
    const [nimi,setNimi]=useState(''); //handleNimiChange
    //<input type="text" name="nimi" value ={nimi} onChange={handleChange} />
    const [osoite,setOsoite]=useState(''); //handleOsoiteChange
    //<input type="text" name="osoite" value ={osoite} onChange={handleChange}  />
    */
    const nimi = useFormInput('');
    const osoite = useFormInput('');

    const [searchString, setSearchString] = useState('');

    //NOKUN EI NIIN EI ONNISTU!!!!!!
    /*
        useEffect(() => {
            setCustomerlist("testi");
            if (customerdata.length > 0) {
                setCustomerlist("on jotain");
                setCustomerlist(                                
                        customerdata.customerrows.map(item => (
                            <li key={item.id}>
                                {item.nimi}
                                {item.osoite}
                            </li>
                        ))
                    );
            }
    
        }, [customerdata]);//kun customerdata muuttuu, tapahtuu tämä hook
    */

    useEffect(() => {
        if (count > 0) {
            //console.log('effect')
            axios.get('http://localhost:3004/asiakkaat' + searchString)
                .then(response => {
                    console.log('promise fulfilled')
                    setCustomerdata(response.data)
                })
        }
    }, [count])  //kun count muuttuu, hakee uusiksi


    useEffect(() => {
        //setSearchString('?nimi_like='+nimi+'&'+'osoite_like='+osoite);        
        setSearchString('?nimi_like=' + nimi.value + '&' + 'osoite_like=' + osoite.value);
    });



    //console.log('render', notes.length, 'notes')


    //Tämäntyyppinen ehdotus tuli kun koitin kääntää tuota alempaa
    /*
        useEffect(() => {
            let searchstr = '?';
            let data = '';
            async function fetchCustomerdata() {
                let response = await fetch("http://localhost:3004/asiakkaat" + searchstr);
                data = await response.json();
            }
            fetchCustomerdata();
            setCustomerdata(data);
        });
    */

    /*
        useEffect(async () => {
            let searchstr = '?';
    
            let response = await fetch("http://localhost:3004/asiakkaat" + searchstr)
            let data = await response.json();
    
            setCustomerdata(data);
        });
    */
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



    function handleButtonClick(e) {
        //TODO:fetchData
        setCount(count + 1); //tämän voisi laittaa suoraan tuonne buttonin koodiinkin
        alert(searchString);
        alert(count);//alerttiin mennessä ei vielä ole kasvattanut tuota counttia! vasta tästä poistuttaessa!!        
    }

    return (

        <div>

            <p>Huom. yhteystietoihin meno a hreffillä hakee palvelimelta koko sivun uusiksi, tämä ei hyvä. Navlinkkinä haku sen sijaan hakee sivun ulkoasun sivulta itsestään.</p>
            <form>
                <label>Nimi:</label>
                <input {...nimi} />
                <br />
                <label>Osoite:</label>
                <input {...osoite} />
                <br />
                <label>Postinumero:</label>
                <input type="text" name="postinumero" />
            </form>
            <button onClick={handleButtonClick}>Hae</button>
            <br />
            <label>{searchString}</label>
            <p>{customerlist}</p>
            <table border="1"><tbody>
                <Asiakaslista asiakkaat={customerdata}></Asiakaslista>
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

/*     {customerdata.customerrows.map(item => (
                    <tr key={item.customer.id}>
                        <td>{item.customer.nimi}</td>
                    </tr>
                ))}
*/

function Asiakaslista(as) {

    let items = "Asiakkaat";

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
                <td><button value={customer.id} onClick={((e) => this.poistaClicked(e, customer.id))}>Poista </button></td>
            </tr>

        );
    }

    return items;
}
