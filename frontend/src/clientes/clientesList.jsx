import React , {Component} from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const createListItens = () =>{
        const list = props.list || []

        return (
            list.map(client => (
                <tr key={client._id}>
                    <td className='nomeCliente'>{client.name}</td>
                    <td className='acoesCliente'><IconButton style='danger' icon='fa fa-trash' onClick={() => props.removeClient(client)}/></td>
                </tr>
            )
        ))
    }

        return (
            <table className='table clienteLista'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {createListItens()}
                </tbody>
            </table>
        )
}

