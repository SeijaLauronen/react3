
import React, { Component } from 'react';
class TableClass2 extends Component {
    constructor(props) {
        super();
    }


    




    render() {
        //alert (this.props.col1)
        return (
            <div>
                <table border ="1">
                    <tbody>
                        <tr>
                            <th>{this.props.col1}</th>
                            <th>{this.props.col2}</th>
                            <th>{this.props.col3}</th></tr>
                        
                        <Tablerows  
                        eka ={this.props.col1}   
                        toka ={this.props.col2}                      
                        kolmas ={this.props.col3}                                         
                        customers={this.props.customers } />
                    </tbody>                    
                </table>
            </div>
        )
    }

}


function Tablerows(param) {
    //console.log(param);    
    //param.customers.forEach(element => {
        //alert(element.nimi);
    //});
    //alert (param.eka);

   //Jos ei laittanut tuota key:tä  niin inspect ilmoitti, että semmonen olisi hyvä laittaa
   
   const items = param.customers.map((item) =>
        <tr key={(item.id).toString()}>
            <td>{item[param.eka]}</td>
            <td>{item[param.toka]}</td>
            <td>{item[param.kolmas]}</td></tr>
    );

    return items;
}


export default TableClass2;