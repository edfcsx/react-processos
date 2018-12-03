import React, {Component} from 'react'
import ClientesForm from './clientesForm'
import ClientesList from './clientesList'
import Axios from 'axios';
import './clientes.css'

const URL = 'http://127.0.0.1:3003/api/clientes'

export default class Clientes extends Component {

    constructor(props){
        super(props)
        this.state = {name: '', clientsList: []}
        this.listLoad()

        this.changeName = this.changeName.bind(this)
        this.addClient = this.addClient.bind(this)
        this.removeClient = this.removeClient.bind(this)
    }
    
    changeName(e){
        this.setState({...this.state, name: e.target.value})
    }

    addClient(){
        const name = this.state.name
        Axios.post(URL,{name})
            .then(response => this.listLoad())
    }

    listLoad(){
        Axios.get(URL)
            .then(response => this.setState({...this.state, list: response.data}))
    }

    removeClient(cliente){
        Axios.delete(`${URL}/${cliente._id}`)
            .then(response => this.listLoad())
    }

    render(){
        return (
            <div>
            <h2 className='text-center'>Cadastro de clientes</h2>
            <br/>
            <ClientesForm name={this.state.name} 
                changeName={this.changeName}
                addClient={this.addClient}
            />
            <ClientesList list={this.state.list}
                removeClient={this.removeClient}
            />
            </div>
        )
    }

}