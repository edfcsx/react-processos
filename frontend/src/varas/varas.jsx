import React, {Component} from 'react'
import VarasForm from './varasForm'
import axios from 'axios'

const URL = 'http://127.0.0.1:3003/api/varas'

export default class Varas extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', type: '', varasList: []}

        this.changeDescription = this.changeDescription.bind(this)
        this.changeType = this.changeType.bind(this)
        this.addVara = this.addVara.bind(this)
    }


    changeDescription(e){
        this.setState({...this.state, description: e.target.value})
    }

    changeType(e){
        this.setState({...this.state, type: e.target.value})
    }

    addVara(){
        const description = this.state.description
        const type = this.state.type
        
        axios.post(URL,{description,type})
            .then(reponse => console.log('Vara cadastrada com sucesso'))
    }
    

    render(){
        return (
            <div>
            <h5 className='text-center'>Cadastro de Varas</h5>
            <VarasForm 
                description={this.state.description}
                type = {this.state.type} 
                changeDescription={this.changeDescription}
                changeType={this.changeType}
                addVara={this.addVara}
            />
            </div>
        )
    }
}

