import React from 'react';
import './App'

class Funcao extends React.Component {
    olaProps = (riodejaneiro) => { 
            console.log(riodejaneiro)
           
        } 

    
    render(){
        return (
        <div>
        
        <button onClick={() => this.olaProps('Olá')} className="botao">Clique em mim!!!!!</button> 
        <p>{this.props.olaProps}</p>
        </div>
        )}
}

export default Funcao 