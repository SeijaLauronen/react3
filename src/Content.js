import React, {Component} from 'react';

class Content extends Component{
    
    constructor(props){
        super();
    }

    render(){
        return (
            <div>
                <p>Tämä on oma komponenttinsa {this.props.nimi}</p>
                
            </div>
        )
    }
}

export default Content;