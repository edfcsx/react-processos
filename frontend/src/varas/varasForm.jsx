import React from 'react'
import Grid from '../template/grid'
import Iconbutton from '../template/iconButton'

export default props => (

    <div role='form' className='varasForm'>
        <Grid xs={12} sm={12} md={7} lg={7}>
            <input className='form-control' id='description' name='description' placeholder="Nome da vara"
                value={props.description} onChange={props.changeDescription}
            />
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4}>
            <select name="type" id="type" className='form-control' value={props.type} onChange={props.changeType}>
                <option value='Civil'>Civil</option>
                <option value='Criminal'>Criminal</option>
                <option value='Trabalhista'>Trabalhista</option>
                <option value='Juizado Especial'>Juizado Especial</option>
            </select>
        </Grid>
        <Grid xs={12} sm={12} md={1} lg={1}>
            <Iconbutton style='success' icon='fa fa-check' onClick={props.addVara}/>
        </Grid>
    </div>

)