import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    
    const Hotkeys = (event) => {
        if(event.key === 'Enter'){
            props.addClient()
        }
    }

    return (
        <div role='form' className='clienteForm'>
            <Grid xs={11} sm={11} md={11} lg={11}>
                <input className='form-control' id='name' placeholder='Informe o nome do cliente'
                    value={props.name} onChange={props.changeName} onKeyUp={Hotkeys}/>    
            </Grid>
            <Grid xs={1} sm={1} md={1} lg={1}>
                <IconButton style='primary' icon='fa fa-check' onClick={props.addClient}/>    
            </Grid>
        </div>
    )

}