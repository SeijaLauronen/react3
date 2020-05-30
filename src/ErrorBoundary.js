import React, { Component } from 'react';
//Koodi  suoraan täältä
//https://codepen.io/gaearon/pen/wqvxGa?editors=0010
//Sitten kokeiltu myös tuota videolla olevaa, joka tässä nyt kommentoitu:
// Errorboundervideo: https://www.youtube.com/watch?v=DNYXgtZBRPE


class ErrorBoundary extends Component {

    
    /*
    constructor(props) {
        //super(props); //propsilla vai ilman? Ei tunnu olevan vaikutusta
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {        
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError){
            return <p>Jotain meni pieleen</p>
        }
        //return this.props.children //tämä on kaikissa malleissa, mutta ei tämä toimi!
        return this.props.children
        
    }
    */
    
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    /*
    checkErrors(props){
        if (props.lkm > 1) {        
            // Simulate a JS error
            throw new Error('Samalla id:llä useita asiakkaita');
        }
    }
    */
   
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Tehtävä 86: Jossain tuli virhe.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children; //tästä tuli virhe
      
      
    }  
    
}
export default ErrorBoundary;