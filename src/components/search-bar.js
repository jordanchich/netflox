import React, {Component} from 'react'

class SearchBar extends Component {  
    constructor(props){
        super(props); //permet de recevoir des propriétés ou des valeurs
        this.state = {
            searchText:"", 
            placeHolder:"Tapez votre film",
            intervalBeforeRequest: 1000,
            lockRequest: false
        }
    }
    render(){
        return (
         // quand plusieurs composants sont retournés, il faut encapusuler le tout dans une balise
         // on bind pour raccrocher le contexte de notre classe à dans la fonction 
        <div className="row"> 
        <div className="col-md-8 input-group">
        <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/> 
        <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
        </span>
        </div>
        </div> 
        )
    }  
    handleChange(event){
        this.setState({searchText:event.target.value}); // contient la valeur du placeholder // quand l etat est changé il se reinitialise dans le render
        if(!this.state.lockRequest){ //ouverture du verrou
            this.setState({lockRequest: true}) // fermeture du verrou
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
        }
    }

    handleOnClick(event){
       this.search()
    }

    search(){
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})
    }
}

export default SearchBar;